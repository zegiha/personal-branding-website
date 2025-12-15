import { type ButtonLikesColor, getButtonLikes } from '@/utils';
import type { IconName, IconProps } from '@/components';
import { Icon, Text } from '@/components';
import { containerMedium } from './st.css';
export function Badge({
  size,
  color,
  translucent=false,
  label,
  leadIcon,
  trailingIcon,
}: {
  size: 'medium';
  color: ButtonLikesColor;
  translucent?: boolean;
  leadIcon?: Omit<IconProps, 'color'> | IconName;
  label: string;
  trailingIcon?: Omit<IconProps, 'color'> | IconName;
}) {
  const leadIconProps = typeof leadIcon === 'string' ? { name: leadIcon } : leadIcon;
  const trailingIconProps = typeof trailingIcon === 'string' ? { name: trailingIcon } : trailingIcon;

  const {container, textColor} = getButtonLikes({ color, translucent })

  return (
    <div className={containerMedium} style={{backgroundColor: container}}>
      {leadIconProps && <Icon {...leadIconProps} color={textColor} size={14} />}
      <Text type="label" size="small" color={textColor}>{label}</Text>
      {trailingIconProps && <Icon {...trailingIconProps} color={textColor} size={14} />}
    </div>
  );
}