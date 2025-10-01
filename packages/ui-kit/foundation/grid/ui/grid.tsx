import { getWidthClass, getWidthStyle } from "design-kit";
import type { TypeGridProps } from "../type";
import styles from "./grid.module.css";

export function Grid({
  width,
  row,
  col,
  gap,
  children
}: TypeGridProps) {
  const classNames = [
    styles.uiKitGridDefault,
    col && styles[`uiKitGridCol${col}` as keyof typeof styles],
    row && styles[`uiKitGridRow${row}` as keyof typeof styles],
    width && getWidthClass(width)
  ].filter(Boolean).join(" ");

  const inlineStyles = {
    ...getWidthStyle(width),
    ...(gap && { gridGap: gap })
  };

  return (
    <div className={classNames} style={inlineStyles}>
      {children}
    </div>
  );
}
