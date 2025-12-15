'use client'

import { container } from "./st.css"
import { Icon, type IconName, Text } from '@/components'
import { type ButtonLikesColor, getButtonLikes } from "@/utils";

type ChipProps = {
  iconName: IconName
  label: string
  isActive: boolean
  onClick?: () => void
  disabled?: boolean
} & (
  { color: ButtonLikesColor } |
  {
    activeColor: ButtonLikesColor
    inActiveColor: ButtonLikesColor
  }
)

export function Chip({
  iconName,
  label,
  disabled=false,
  isActive,
  onClick,
  ...rest
}: ChipProps) {
  const currentColor = 'color' in rest ?
    rest.color :
    isActive ?
      rest.activeColor :
      rest.inActiveColor
  const {
    container: containerBackgroundColor,
    textColor
  } = getButtonLikes({translucent: !isActive, color: currentColor})

  return (
    <button
      className={container}
      style={{
        backgroundColor: containerBackgroundColor
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {iconName &&
        <Icon
          name={iconName}
          size={14}
          color={textColor}
          fill={isActive}
        />
      }
      <Text type="label" size="small" color={textColor}>{label}</Text>
    </button>
  )
}