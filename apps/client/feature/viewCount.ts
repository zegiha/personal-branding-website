import { axios } from "@/utils/axios";

const STORAGE_KEY = 'view_history';

export const VIEW_COUNT_STATUS = {
  ADD: {
    SUCCESS: 'success',
    ALREADY_VIEWED: 'already_viewed',
    FAILED: 'failed',
    SKIPPED: 'skipped',
  }
} as const;

type AddResult = typeof VIEW_COUNT_STATUS['ADD'][keyof typeof VIEW_COUNT_STATUS['ADD']];

export class ViewCountService {
  private readonly storage: Storage | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.storage = window.localStorage;
    }
  }

  /**
   * 조회수 증가 요청
   * @param id 게시글 ID
   */
  async add(id: string): Promise<AddResult> {
    if (!this.storage) {
      return VIEW_COUNT_STATUS.ADD.FAILED;
    }

    try {
      const storedData = this.storage.getItem(STORAGE_KEY);
      const viewHistory: string[] = storedData ? JSON.parse(storedData) : [];

      if (viewHistory.includes(id)) {
        return VIEW_COUNT_STATUS.ADD.ALREADY_VIEWED;
      }

      viewHistory.push(id);
      this.storage.setItem(STORAGE_KEY, JSON.stringify(viewHistory));

      try {
        await axios.post(`/article/${id}/view`);
      } catch {
        this.storage.setItem(STORAGE_KEY, JSON.stringify(viewHistory.filter(v => v !== id)));
        return VIEW_COUNT_STATUS.ADD.FAILED;
      }

      return VIEW_COUNT_STATUS.ADD.SUCCESS;

    } catch (error) {
      console.warn('[ViewCount] Failed to count view:', error);
      return VIEW_COUNT_STATUS.ADD.SKIPPED;
    }
  }
}

export const viewCountService = new ViewCountService();