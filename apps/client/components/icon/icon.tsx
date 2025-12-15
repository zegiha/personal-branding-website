import { toFirstCharacterUpperCase, getTextColor } from '@/utils';
import { default as Article } from './assets/Article.svg';
import { default as ArticleFill } from './assets/ArticleFill.svg';
import { default as Calendar } from './assets/Calendar.svg';
import { default as CalendarFill } from './assets/CalendarFill.svg';
import { default as ChevronDown } from './assets/ChevronDown.svg';
import { default as ChevronDownThick } from './assets/ChevronDownThick.svg';
import { default as ChevronLeft } from './assets/ChevronLeft.svg';
import { default as ChevronRight } from './assets/ChevronRight.svg';
import { default as ChevronUp } from './assets/ChevronUp.svg';
import { default as ChevronUpThick } from './assets/ChevronUpThick.svg';
import { default as Close } from './assets/Close.svg';
import { default as CloseThick } from './assets/CloseThick.svg';
import { default as Copy } from './assets/Copy.svg';
import { default as CopyFill } from './assets/CopyFill.svg';
import { default as Edit } from './assets/Edit.svg';
import { default as EditFill } from './assets/EditFill.svg';
import { default as Email } from './assets/Email.svg';
import { default as EmailThick } from './assets/EmailThick.svg';
import { default as Heart } from './assets/Heart.svg';
import { default as HeartFill } from './assets/HeartFill.svg';
import { default as Info } from './assets/Info.svg';
import { default as InfoFill } from './assets/InfoFill.svg';
import { default as Invisible } from './assets/Invisible.svg';
import { default as InvisibleFill } from './assets/InvisibleFill.svg';
import { default as Link } from './assets/Link.svg';
import { default as LinkThick } from './assets/LinkThick.svg';
import { default as Menu } from './assets/Menu.svg';
import { default as MenuThick } from './assets/MenuThick.svg';
import { default as MultiPerson } from './assets/MultiPerson.svg';
import { default as MultiPersonFill } from './assets/MultiPersonFill.svg';
import { default as NewWindow } from './assets/NewWindow.svg';
import { default as None } from './assets/None.svg';
import { default as Pause } from './assets/Pause.svg';
import { default as PauseFill } from './assets/PauseFill.svg';
import { default as Play } from './assets/Play.svg';
import { default as PlayFill } from './assets/PlayFill.svg';
import { default as Search } from './assets/Search.svg';
import { default as SearchThick } from './assets/SearchThick.svg';
import { default as Series } from './assets/Series.svg';
import { default as Share } from './assets/Share.svg';
import { default as ShareFill } from './assets/ShareFill.svg';
import { default as Star } from './assets/Star.svg';
import { default as StarFill } from './assets/StarFill.svg';
import { default as StarHalf } from './assets/StarHalf.svg';
import { default as Time } from './assets/Time.svg';
import { default as TimeFill } from './assets/TimeFill.svg';
import { default as Visible } from './assets/Visible.svg';
import { default as VisibleFill } from './assets/VisibleFill.svg';
import { default as Light } from './assets/Light.svg';
import { default as Dark } from './assets/Dark.svg';
import type { IconProps } from './icon.type';

const ICONS = {
  Article,
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Close,
  Copy,
  Edit,
  Email,
  Heart,
  Info,
  Invisible,
  Link,
  Menu,
  MultiPerson,
  NewWindow,
  None,
  Pause,
  Play,
  Search,
  Series,
  Share,
  Star,
  StarHalf,
  Time,
  Visible,
  Light,
  Dark,
} as const;

const ICONS_FILL = {
  Article: ArticleFill,
  Calendar: CalendarFill,
  Copy: CopyFill,
  Edit: EditFill,
  Heart: HeartFill,
  Info: InfoFill,
  Invisible: InvisibleFill,
  MultiPerson: MultiPersonFill,
  Pause: PauseFill,
  Play: PlayFill,
  Share: ShareFill,
  Star: StarFill,
  Time: TimeFill,
  Visible: VisibleFill,
} as const;

const ICONS_THICK = {
  ChevronDown: ChevronDownThick,
  ChevronUp: ChevronUpThick,
  Close: CloseThick,
  Email: EmailThick,
  Link: LinkThick,
  Menu: MenuThick,
  Search: SearchThick,
} as const;

export function Icon({
  name,
  size = 24,
  fill = false,
  thick = false,
  color = 'normal',
  className,
}: IconProps) {
  if(thick && fill) throw new Error('thick and fill cannot be true at the same time');

  const iconKey = toFirstCharacterUpperCase(name);

  const Cmp = fill ?
    ICONS_FILL[iconKey as keyof typeof ICONS_FILL] :
    thick ?
      ICONS_THICK[iconKey as keyof typeof ICONS_THICK] :
      ICONS[iconKey as keyof typeof ICONS];
 
  if(!Cmp) throw new Error(`Icon ${name} not found`);

  return (
    <Cmp
      style={{
        width: size,
        height: size,
        fill: getTextColor(color),
      }}
      className={className}
    />
  );
}
