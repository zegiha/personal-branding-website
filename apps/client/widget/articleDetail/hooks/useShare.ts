'use client'

import {useEffect, useState} from 'react';
import { shareService, SHARE_STATUS } from '@/feature/share';

export function useShare(id: string, title: string, initialCount: number) {
  const [shareState, setShareState] = useState<{
    hasShared: boolean;
    count: number;
  }>({
    hasShared: false,
    count: initialCount,
  });

  useEffect(() => {
    const hasShared = shareService.hasShared(id)
    setShareState(prev => ({...prev, hasShared}));
  }, [id]);

  const handleShare = async () => {
    const url = window.location.href;

    // 1. Native Share API 시도
    const nativeShared = await shareService.shareWithNative(title, url);

    if (nativeShared) {
      const result = await shareService.share(id);
      if (result === SHARE_STATUS.SHARE.SUCCESS) {
        setShareState({ hasShared: true, count: shareState.count + 1 });
      }
    } else {
      // 2. 클립보드 복사 fallback
      const copied = await shareService.copyToClipboard(url);
      if (copied) {
        alert('링크가 복사되었습니다!');

        const result = await shareService.share(id);
        if (result === SHARE_STATUS.SHARE.SUCCESS) {
          setShareState({ hasShared: true, count: shareState.count + 1 });
        }
      }
    }
  };

  return {
    hasShared: shareState.hasShared,
    shareCount: shareState.count,
    handleShare,
  };
}
