import { CSSProperties, ReactNode } from 'react';

type FlexBoxProps = {
  children?: ReactNode;
  gap?: number;
  alignItems?: CSSProperties['alignItems'];
  justifyContent?: CSSProperties['justifyContent'];
  width?: CSSProperties['width'];
  maxWidth?: CSSProperties['maxWidth'];
  className?: string;
};

export function Row({
  children,
  gap = 0,
  alignItems,
  justifyContent,
  width,
  maxWidth,
  className,
}: FlexBoxProps) {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: `${gap}px`,
        alignItems,
        justifyContent,
        width,
        maxWidth,
      }}
    >
      {children}
    </div>
  );
}

export function Col({
  children,
  gap = 0,
  alignItems,
  justifyContent,
  width,
  maxWidth,
  className,
}: FlexBoxProps) {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: `${gap}px`,
        alignItems,
        justifyContent,
        width,
        maxWidth,
      }}
    >
      {children}
    </div>
  );
}
