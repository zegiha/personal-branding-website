import { axios } from "@/utils/axios";

const STORAGE_KEY = 'like_history';

export const LIKE_STATUS = {
  TOGGLE: {
    LIKED: 'liked',
    UNLIKED: 'unliked',
    FAILED: 'failed',
    SKIPPED: 'skipped',
  }
} as const;

type ToggleResult = typeof LIKE_STATUS['TOGGLE'][keyof typeof LIKE_STATUS['TOGGLE']];

export class LikeService {
  private readonly storage: Storage | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.storage = window.localStorage;
    }
  }

  /**
   * 현재 좋아요 상태 확인
   */
  isLiked(id: string): boolean {
    if (!this.storage) return false;

    try {
      const storedData = this.storage.getItem(STORAGE_KEY);
      const likeHistory: string[] = storedData ? JSON.parse(storedData) : [];
      return likeHistory.includes(id);
    } catch {
      return false;
    }
  }

  /**
   * 좋아요 토글
   */
  async toggle(id: string): Promise<ToggleResult> {
    if (!this.storage) {
      return LIKE_STATUS.TOGGLE.FAILED;
    }

    try {
      const storedData = this.storage.getItem(STORAGE_KEY);
      const likeHistory: string[] = storedData ? JSON.parse(storedData) : [];

      const isCurrentlyLiked = likeHistory.includes(id);

      if (isCurrentlyLiked) {
        // 좋아요 취소
        const newHistory = likeHistory.filter(v => v !== id);
        this.storage.setItem(STORAGE_KEY, JSON.stringify(newHistory));

        try {
          await axios.delete(`/article/${id}/like`);
        } catch {
          // 실패 시 롤백
          this.storage.setItem(STORAGE_KEY, JSON.stringify(likeHistory));
          return LIKE_STATUS.TOGGLE.FAILED;
        }

        return LIKE_STATUS.TOGGLE.UNLIKED;
      } else {
        // 좋아요 추가
        likeHistory.push(id);
        this.storage.setItem(STORAGE_KEY, JSON.stringify(likeHistory));

        try {
          await axios.post(`/article/${id}/like`);
        } catch {
          // 실패 시 롤백
          this.storage.setItem(STORAGE_KEY, JSON.stringify(likeHistory.filter(v => v !== id)));
          return LIKE_STATUS.TOGGLE.FAILED;
        }

        return LIKE_STATUS.TOGGLE.LIKED;
      }

    } catch (error) {
      console.warn('[Like] Failed to toggle like:', error);
      return LIKE_STATUS.TOGGLE.SKIPPED;
    }
  }
}

export const likeService = new LikeService();
