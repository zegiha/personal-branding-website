import { Icon as BaseIcon } from '../../../shared/ui/icon'
import type { IconProps as BaseIconProps } from '../../../shared/ui/icon'
import { LabelColorType } from '../type/labelColorType'
import { getLabelColor } from '../helper/getLabelColor'

export interface IconProps extends Omit<BaseIconProps, 'color'> {
  color?: LabelColorType | string
}

export function Icon({ color, ...props }: IconProps) {
  return <BaseIcon color={getLabelColor(color, 'inherit')} {...props} />
}