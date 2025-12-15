import {
  container,
  coverImage as coverImageStyle,
  contentsContainer,
  contentsWrap,
  textGroup,
  badgeGroup,
  infoGroup,
  infoItemContainer,
  chipGroup,
} from "./styles/headerSection.css";
import { Icon, Text, Chip, Badge} from "@/components";
import {cn} from "@/utils";
import {ArticleEntity} from "@/types";
import Image from 'next/image';
import {useEffect, useState} from "react";
import {
  VIEW_COUNT_STATUS,
  viewCountService,
} from "@/feature";
import {useLike} from "@/widget/articleDetail/hooks/useLike";
import {useShare} from "@/widget/articleDetail/hooks/useShare";

type HeaderSectionProps = Pick<ArticleEntity,
  | 'id'
  | 'title'
  | 'coverImageUrl'
  | 'readTime'
  | 'updatedAt'
  | 'tags'
  | 'viewCount'
  | 'likeCount'
  | 'shareCount'
>

export function ArticleHeaderSection({
  id,
  title,
  coverImageUrl,
  readTime,
  updatedAt,
  tags,
  viewCount,
  shareCount: initShareCount,
  likeCount: initLikeCount,
}: HeaderSectionProps) {
  const [view, setView] = useState<'view' | 'alreadyView' | 'failed'>('view');
  const {isLiked, handleLike, likeCount} = useLike(id, initLikeCount)
  const {hasShared, handleShare, shareCount} = useShare(id, title, initShareCount)

  useEffect(() => {
    const handleViewCount = async () => {
      const res  = await viewCountService.add(id)
      if(
        res === VIEW_COUNT_STATUS.ADD.SKIPPED ||
        res === VIEW_COUNT_STATUS.ADD.FAILED
      ) {
        setView('failed')
      } else if(res === VIEW_COUNT_STATUS.ADD.ALREADY_VIEWED) {
        setView('alreadyView')
      }
    }
    handleViewCount()
  }, [])

  return (
    <section className={cn(container)}>
      <Image
        src={coverImageUrl}
        alt="article header image"
        className={coverImageStyle}
        fill
        priority
        sizes="100vw"
      />
      <div className={contentsContainer}>
        <div className={contentsWrap}>
          <div className={textGroup}>
            <div className={badgeGroup}>
              {tags.map((v, i) => (
                <Badge
                  key={`${i}`}
                  size="medium"
                  label={v}
                  color="gray"
                  translucent={true}
                />
              ))}
            </div>
            <Text type="display" size="large" color="strong">
              {title}
            </Text>
            <div className={infoGroup}>
              <div className={infoItemContainer}>
                <Icon name="calendar" size={14} color="weak"/>
                <Text type="caption" size="medium" color="weak">{new Date(updatedAt).toLocaleDateString()}</Text>
              </div>
              <div className={infoItemContainer}>
                <Icon name="time" size={14} color="weak"/>
                <Text type="caption" size="medium" color="weak">{readTime}분</Text>
              </div>
            </div>
          </div>
          <div className={chipGroup}>
            <Chip
              color={'gray'}
              iconName={'visible'}
              label={`${view === 'view' ? viewCount + 1 : viewCount}`}
              isActive={view !== 'failed'}
            />
            <Chip
              inActiveColor={'gray'}
              activeColor={'red'}
              iconName={'heart'}
              label={`${likeCount}`}
              isActive={isLiked}
              onClick={handleLike}
            />
            <Chip
              inActiveColor={'gray'}
              activeColor={'blue'}
              iconName={'share'}
              label={`${shareCount}`}
              isActive={hasShared}
              onClick={handleShare}
            />
          </div>
        </div>
      </div>
    </section>
  )
}