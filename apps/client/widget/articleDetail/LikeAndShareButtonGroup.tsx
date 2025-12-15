'use client'

import { Icon, Text } from "@/components";
import {
  buttonGroupPositionWrap,
  buttonGroup,
  button as buttonSt,
} from "./styles/contentSection.css";
import { useLike } from "./hooks/useLike";
import { useShare } from "./hooks/useShare";

type LikeAndShareButtonGroupProps = {
  id: string;
  title: string;
  likeCount: number;
  shareCount: number;
};

export function LikeAndShareButtonGroup({
  id,
  title,
  likeCount,
  shareCount,
}: LikeAndShareButtonGroupProps) {
  const { isLiked, likeCount: currentLikeCount, handleLike } = useLike(id, likeCount);
  const { hasShared, shareCount: currentShareCount, handleShare } = useShare(id, title, shareCount);

  return (
    <div className={buttonGroupPositionWrap}>
      <div className={buttonGroup}>
        <button className={buttonSt} onClick={handleLike}>
          <Icon
            name={'heart'}
            size={18}
            color={isLiked ? 'red' : 'normal'}
            fill={isLiked}
          />
          <Text type={'label'} size={'small'} color={'normal'}>{currentLikeCount}</Text>
        </button>
        <button className={buttonSt} onClick={handleShare}>
          <Icon
            name={'share'}
            size={18}
            color={hasShared ? 'blue' : 'normal'}
            fill={hasShared}
          />
          <Text type={'label'} size={'small'} color={'normal'}>{currentShareCount}</Text>
        </button>
      </div>
    </div>
  );
}
