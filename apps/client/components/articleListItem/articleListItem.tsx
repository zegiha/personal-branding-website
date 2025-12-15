import type {ArticleSummary, BlurImageEntity} from "@/types"
import Link from "next/link"
import {
  container,
  textWrap,
  coverImageWrap,
  coverImage as coverImageStyle,
  title as titleStyle,
} from "./st.css"
import {Text} from "@/components"
import Image from "next/image";

export function ArticleListItem({
  title,
  coverImageUrl,
  blurDataUrl,
  description,
  updatedAt,
  isPriority = false,
}: Omit<BlurImageEntity<ArticleSummary>, 'id' | 'viewCount' | 'readTime'> & {
  isPriority?: boolean;
}) {
  return (
    <Link href={`/article/${title}`} className={container}>
      <div className={textWrap}>
        <Text type='label' size='medium' color='strong' className={titleStyle}>{title}</Text>
        <Text type='label' size='small' color='normal'>{description}</Text>
        <Text type='caption' size='medium' color='weak'>{new Date(updatedAt).toLocaleDateString()}</Text>
      </div>
      <div className={coverImageWrap}>
        <Image
          className={coverImageStyle}
          src={coverImageUrl}
          alt={title}
          fill
          sizes="240px"
          priority={isPriority}
          fetchPriority={isPriority ? 'high' : 'auto'}
          loading={isPriority ? undefined : 'lazy'}
          placeholder={'blur'}
          blurDataURL={blurDataUrl}
        />
      </div>
    </Link>
  )
}