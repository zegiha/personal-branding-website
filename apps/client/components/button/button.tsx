'use client'

import {ButtonLikesColor, cn, getButtonLikes} from "@/utils";
import {container} from "./st.css";
import {Text} from "@/components";

export function Button({
  color,
  label,
  onClick,
  translucent
}: {
  color: ButtonLikesColor
  label: string
  onClick?: () => void
  translucent?: boolean
}) {
  const {container: containerBackgroundColor, textColor} = getButtonLikes({
    color,
    translucent
  })

  return (
    <button
      className={cn(container)}
      style={{backgroundColor: containerBackgroundColor}}
      onClick={onClick}
    >
      <Text type={'label'} size={'medium'} color={textColor}>{label}</Text>
    </button>
  )
}