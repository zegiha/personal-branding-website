import { axios } from "@/utils/axios";

const STORAGE_KEY = 'share_history';

export const SHARE_STATUS = {
  SHARE: {
    SUCCESS: 'success',
    ALREADY_SHARED: 'already_shared',
    FAILED: 'failed',
    SKIPPED: 'skipped',
  }
} as const;

type ShareResult = typeof SHARE_STATUS['SHARE'][keyof typeof SHARE_STATUS['SHARE']];

export class ShareService {
  private readonly storage: Storage | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.storage = window.localStorage;
    }
  }

  /**
   * 공유 카운트 증가
   */
  async share(id: string): Promise<ShareResult> {
    if (!this.storage) {
      return SHARE_STATUS.SHARE.FAILED;
    }

    try {
      const storedData = this.storage.getItem(STORAGE_KEY);
      const shareHistory: string[] = storedData ? JSON.parse(storedData) : [];

      if (shareHistory.includes(id)) {
        return SHARE_STATUS.SHARE.ALREADY_SHARED;
      }

      shareHistory.push(id);
      this.storage.setItem(STORAGE_KEY, JSON.stringify(shareHistory));

      try {
        await axios.post(`/article/${id}/share`);
      } catch {
        this.storage.setItem(STORAGE_KEY, JSON.stringify(shareHistory.filter(v => v !== id)));
        return SHARE_STATUS.SHARE.FAILED;
      }

      return SHARE_STATUS.SHARE.SUCCESS;

    } catch (error) {
      console.warn('[Share] Failed to share:', error);
      return SHARE_STATUS.SHARE.SKIPPED;
    }
  }

  /**
   * Web Share API를 사용한 공유
   */
  async shareWithNative(title: string, url: string): Promise<boolean> {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });
        return true;
      } catch (error) {
        console.warn('[Share] Native share cancelled or failed:', error);
        return false;
      }
    }
    return false;
  }

  /**
   * 클립보드에 URL 복사
   */
  async copyToClipboard(url: string): Promise<boolean> {
    try {
      await navigator.clipboard.writeText(url);
      return true;
    } catch (error) {
      console.warn('[Share] Failed to copy to clipboard:', error);
      return false;
    }
  }

  hasShared(id: string): boolean {
    if(!this.storage) return false
    try {
      const storedData = this.storage.getItem(STORAGE_KEY);
      const shareHistory: string[] = storedData ? JSON.parse(storedData) : [];
      return shareHistory.includes(id);
    } catch {
      return false;
    }
  }
}

export const shareService = new ShareService();
