import { cn } from '@/utils';
import * as styles from './st.css';
import { radius } from "@/theme/tokens";

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  radius?: keyof typeof radius;
}

export function Skeleton({
  width,
  height,
  className,
  radius: radiusKey,
}: SkeletonProps) {
  return (
    <div
      className={cn(styles.skeleton, className)}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        borderRadius: radiusKey ? radius[radiusKey] : 0,
      }}
    />
  );
}
