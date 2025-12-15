import { ComponentPropsWithoutRef } from "react";
import { ArticleTypo } from "../ArticleTypo";
import { CopyIcon } from "./CopyIcon";
import * as st from "./style.css";
import {articleTokens} from "../../tokens";

export type ArticleButtonProps = ComponentPropsWithoutRef<"button"> & {
  label: string;
  leadIcon?: string;
};

export function ArticleButton({ label, leadIcon, className = '', ...props }: ArticleButtonProps) {
  return (
    <button className={`article-button ${st.button} ${className}`} {...props}>
      <CopyIcon size={14} color={articleTokens.typography.color.normal} />
      <ArticleTypo.caption.medium color="normal">{label}</ArticleTypo.caption.medium>
    </button>
  );
}
