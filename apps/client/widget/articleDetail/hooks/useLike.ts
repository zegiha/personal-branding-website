'use client'

import { useState, useEffect } from 'react';
import { likeService, LIKE_STATUS } from '@/feature/like';

export function useLike(id: string, initialCount: number) {
  const [likeState, setLikeState] = useState<{
    isLiked: boolean;
    count: number;
  }>({
    isLiked: false,
    count: initialCount,
  });

  // 초기 좋아요 상태 확인
  useEffect(() => {
    const isLiked = likeService.isLiked(id);
    setLikeState(prev => ({ ...prev, isLiked }));
  }, [id]);

  const handleLike = async () => {
    const result = await likeService.toggle(id);

    if (result === LIKE_STATUS.TOGGLE.LIKED) {
      setLikeState({ isLiked: true, count: likeState.count + 1 });
    } else if (result === LIKE_STATUS.TOGGLE.UNLIKED) {
      setLikeState({ isLiked: false, count: likeState.count - 1 });
    }
  };

  return {
    isLiked: likeState.isLiked,
    likeCount: likeState.count,
    handleLike,
  };
}
