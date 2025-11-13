import { styled } from "@linaria/react";
import { ComponentPropsWithoutRef } from "react";
import { SharedIcon } from "sdu-kit";
import { ArticleTypo } from "../ArticleTypo";

export type ArticleButtonProps = ComponentPropsWithoutRef<"button"> & {
  label: string;
  leadIcon?: string;
};

const StyledButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background-color: var(--article-box-button-background-color);
  padding: 6px;
  border-radius: 6px;
  transition: all 0.12s ease-in-out;
  height: 29px;

  &:hover:not(:disabled) {
    background-color: var(--article-box-button-background-color-hover);
  }
`;

export function ArticleButton({ label, leadIcon, ...props }: ArticleButtonProps) {
  return (
    <StyledButton className="article-button" {...props}>
      <SharedIcon icon='copy' size={14} color='var(--article-typo-color-normal)' />
      <ArticleTypo.caption.medium $color="normal">{label}</ArticleTypo.caption.medium>
    </StyledButton>
  );
}
