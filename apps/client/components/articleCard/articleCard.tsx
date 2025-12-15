import {Text, Badge, Skeleton} from "@/components"
import {
  container,
  coverImageWrap,
  coverImage as coverImageStyle,
  contentWrap,
  badgeWrap,
} from './style.css'
import Link from "next/link"
import type {ArticleSummary, BlurImageEntity} from "@/types"
import {breakPoint} from "@/theme/tokens";
import Image from "next/image";

export function ArticleCard({
  title,
  coverImageUrl,
  readTime,
  viewCount,
  blurDataUrl,
  isPriority = false,
}: Omit<BlurImageEntity<ArticleSummary>, 'id' | 'description' | 'updatedAt'> & {
  isPriority?: boolean;
}) {
  return (
    <Link href={`/article/${title}`} className={container}>
      <span className={coverImageWrap}>
        <Image
          className={coverImageStyle}
          src={coverImageUrl}
          alt={title}
          fill
          sizes={`320px, ${breakPoint.subMedium} 340px, ${breakPoint.small} 520px`}
          priority={isPriority}
          fetchPriority={isPriority ? 'high' : 'auto'}
          loading={isPriority ? undefined : 'lazy'}
          placeholder={'blur'}
          blurDataURL={blurDataUrl}
        />
      </span>
      <div className={contentWrap}>
        <Text type='label' size='large' color='normal'>{title}</Text>
        <div className={badgeWrap}>
          <Badge
            size="medium"
            color="gray"
            translucent
            label={`${readTime}분`}
            leadIcon="time"
          />
          <Badge
            size="medium"
            color="gray"
            translucent
            label={viewCount.toLocaleString()}
            leadIcon="visible"
          />
        </div>
      </div>
    </Link>
  )
}

export function ArticleCardSkeleton() {
  return (
    <div className={container}>
      <Skeleton className={coverImageWrap} radius={'medium'}/>
      <div className={contentWrap}>
        <Skeleton width={'80%'} height={24} radius={'small'} />
        <div className={badgeWrap}>
          <Skeleton width={70} height={25} radius={'small'}/>
          <Skeleton width={50} height={25} radius={'small'}/>
        </div>
      </div>
    </div>
  )
}