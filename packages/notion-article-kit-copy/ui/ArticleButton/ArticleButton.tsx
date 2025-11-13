import { ComponentPropsWithoutRef } from "react";
import { ArticleTypo } from "../ArticleTypo";
import { TmpIcon } from "./TmpIcon";
import st from "./ArticleButton.module.css";

export type ArticleButtonProps = ComponentPropsWithoutRef<"button"> & {
  label: string;
  leadIcon?: string;
};

export function ArticleButton({ label, leadIcon, className, ...props }: ArticleButtonProps) {
  return (
    <button className={`article-button ${st.button} ${className || ''}`} {...props}>
      <TmpIcon />
      <ArticleTypo.caption.medium $color="normal">{label}</ArticleTypo.caption.medium>
    </button>
  );
}
