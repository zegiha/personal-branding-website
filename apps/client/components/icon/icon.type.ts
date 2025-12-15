import type { TextColorType } from '@/utils';

export type IconName = 
  | 'article'
  | 'calendar'
  | 'chevronDown'
  | 'chevronLeft'
  | 'chevronRight'
  | 'chevronUp'
  | 'close'
  | 'copy'
  | 'edit'
  | 'email'
  | 'heart'
  | 'info'
  | 'invisible'
  | 'link'
  | 'menu'
  | 'multiPerson'
  | 'newWindow'
  | 'none'
  | 'pause'
  | 'play'
  | 'search'
  | 'series'
  | 'share'
  | 'star'
  | 'starHalf'
  | 'time'
  | 'visible'
  | 'light'
  | 'dark';

export type IconProps = {
  name: IconName;
  size?: number;
  fill?: boolean;
  thick?: boolean;
  color?: TextColorType;
  className?: string;
}