import React from "react";
import ArticleIcon from "../../assets/icon/Article.svg";
import ArticleFillIcon from "../../assets/icon/ArticleFill.svg";
import CalendarIcon from "../../assets/icon/Calendar.svg";
import CalendarFillIcon from "../../assets/icon/CalendarFill.svg";
import ChevronDownIcon from "../../assets/icon/ChevronDown.svg";
import ChevronDownThickIcon from "../../assets/icon/ChevronDownThick.svg";
import ChevronLeftIcon from "../../assets/icon/ChevronLeft.svg";
import ChevronRightIcon from "../../assets/icon/ChevronRight.svg";
import ChevronUpIcon from "../../assets/icon/ChevronUp.svg";
import ChevronUpThickIcon from "../../assets/icon/ChevronUpThick.svg";
import CloseIcon from "../../assets/icon/Close.svg";
import CloseThickIcon from "../../assets/icon/CloseThick.svg";
import CopyIcon from "../../assets/icon/Copy.svg";
import CopyFillIcon from "../../assets/icon/CopyFill.svg";
import EditIcon from "../../assets/icon/Edit.svg";
import EditFillIcon from "../../assets/icon/EditFill.svg";
import EmailIcon from "../../assets/icon/Email.svg";
import EmailThickIcon from "../../assets/icon/EmailThick.svg";
import HeartIcon from "../../assets/icon/Heart.svg";
import HeartFillIcon from "../../assets/icon/HeartFill.svg";
import InfoIcon from "../../assets/icon/Info.svg";
import InfoFillIcon from "../../assets/icon/InfoFill.svg";
import InvisibleIcon from "../../assets/icon/Invisible.svg";
import InvisibleFillIcon from "../../assets/icon/InvisibleFill.svg";
import LinkIcon from "../../assets/icon/Link.svg";
import LinkThickIcon from "../../assets/icon/LinkThick.svg";
import MenuIcon from "../../assets/icon/Menu.svg";
import MenuThickIcon from "../../assets/icon/MenuThick.svg";
import MultiPersonIcon from "../../assets/icon/MultiPerson.svg";
import MultiPersonFillIcon from "../../assets/icon/MultiPersonFill.svg";
import NewWindowIcon from "../../assets/icon/NewWindow.svg";
import NoneIcon from "../../assets/icon/None.svg";
import PauseIcon from "../../assets/icon/Pause.svg";
import PauseFillIcon from "../../assets/icon/PauseFill.svg";
import PlayIcon from "../../assets/icon/Play.svg";
import PlayFillIcon from "../../assets/icon/PlayFill.svg";
import SearchIcon from "../../assets/icon/Search.svg";
import SearchThickIcon from "../../assets/icon/SearchThick.svg";
import SeriesIcon from "../../assets/icon/Series.svg";
import ShareIcon from "../../assets/icon/Share.svg";
import ShareFillIcon from "../../assets/icon/ShareFill.svg";
import StarIcon from "../../assets/icon/Star.svg";
import StarFillIcon from "../../assets/icon/StarFill.svg";
import StarHalfIcon from "../../assets/icon/StarHalf.svg";
import TimeIcon from "../../assets/icon/Time.svg";
import TimeFillIcon from "../../assets/icon/TimeFill.svg";
import VisibleIcon from "../../assets/icon/Visible.svg";
import VisibleFillIcon from "../../assets/icon/VisibleFill.svg";

export type IconKey =
  | "none"
  | "newWindow"
  | "chevronLeft"
  | "chevronRight"
  | "multiPerson"
  | "info"
  | "article"
  | "series"
  | "visible"
  | "invisible"
  | "time"
  | "menu"
  | "search"
  | "play"
  | "pause"
  | "close"
  | "chevronUp"
  | "chevronDown"
  | "starHalf"
  | "star"
  | "edit"
  | "heart"
  | "link"
  | "share"
  | "calendar"
  | "copy"
  | "email";

export const iconMap: Record<IconKey, {
  normal: React.FC<React.SVGProps<SVGSVGElement>>
  fill: React.FC<React.SVGProps<SVGSVGElement>>
  thick: React.FC<React.SVGProps<SVGSVGElement>>
}> = {
  "none": {
    normal: NoneIcon,
    fill: () => {throw new Error("cannot be fill")},
    thick: () => {throw new Error("cannot be thick")},
  },
  "newWindow": {
    normal: NewWindowIcon,
    fill: () => {throw new Error("cannot be fill")},
    thick: () => {throw new Error("cannot be thick")},
  },
  "chevronLeft": {
    normal: ChevronLeftIcon,
    fill: () => {throw new Error("cannot be fill")},
    thick: () => {throw new Error("cannot be thick")},
  },
  "chevronRight": {
    normal: ChevronRightIcon,
    fill: () => {throw new Error("cannot be fill")},
    thick: () => {throw new Error("cannot be thick")},
  },
  "multiPerson": {
    normal: MultiPersonIcon,
    fill: MultiPersonFillIcon,
    thick: () => {throw new Error("cannot be thick")},
  },
  "info": {
    normal: InfoIcon,
    fill: InfoFillIcon,
    thick: () => {throw new Error("cannot be thick")},
  },
  "article": {
    normal: ArticleIcon,
    fill: ArticleFillIcon,
    thick: () => {throw new Error("cannot be thick")},
  },
  "series": {
    normal: SeriesIcon,
    fill: () => {throw new Error("cannot be fill")},
    thick: () => {throw new Error("cannot be thick")},
  },
  "visible": {
    normal: VisibleIcon,
    fill: VisibleFillIcon,
    thick: () => {throw new Error("cannot be thick")},
  },
  "invisible": {
    normal: InvisibleIcon,
    fill: InvisibleFillIcon,
    thick: () => {throw new Error("cannot be thick")},
  },
  "time": {
    normal: TimeIcon,
    fill: TimeFillIcon,
    thick: () => {throw new Error("cannot be thick")},
  },
  "menu": {
    normal: MenuIcon,
    fill: () => {throw new Error("cannot be fill")},
    thick: MenuThickIcon,
  },
  "search": {
    normal: SearchIcon,
    fill: () => {throw new Error("cannot be fill")},
    thick: SearchThickIcon,
  },
  "play": {
    normal: PlayIcon,
    fill: PlayFillIcon,
    thick: () => {throw new Error("cannot be thick")},
  },
  "pause": {
    normal: PauseIcon,
    fill: PauseFillIcon,
    thick: () => {throw new Error("cannot be thick")},
  },
  "close": {
    normal: CloseIcon,
    fill: () => {throw new Error("cannot be fill")},
    thick: CloseThickIcon,
  },
  "chevronUp": {
    normal: ChevronUpIcon,
    fill: () => {throw new Error("cannot be fill")},
    thick: ChevronUpThickIcon,
  },
  "chevronDown": {
    normal: ChevronDownIcon,
    fill: () => {throw new Error("cannot be fill")},
    thick: ChevronDownThickIcon,
  },
  "starHalf": {
    normal: StarHalfIcon,
    fill: () => {throw new Error("cannot be fill")},
    thick: () => {throw new Error("cannot be thick")},
  },
  "star": {
    normal: StarIcon,
    fill: StarFillIcon,
    thick: () => {throw new Error("cannot be thick")},
  },
  "edit": {
    normal: EditIcon,
    fill: EditFillIcon,
    thick: () => {throw new Error("cannot be thick")},
  },
  "heart": {
    normal: HeartIcon,
    fill: HeartFillIcon,
    thick: () => {throw new Error("cannot be thick")},
  },
  "link": {
    normal: LinkIcon,
    fill: () => {throw new Error("cannot be fill")},
    thick: LinkThickIcon,
  },
  "share": {
    normal: ShareIcon,
    fill: ShareFillIcon,
    thick: () => {throw new Error("cannot be thick")},
  },
  "calendar": {
    normal: CalendarIcon,
    fill: CalendarFillIcon,
    thick: () => {throw new Error("cannot be thick")},
  },
  "copy": {
    normal: CopyIcon,
    fill: CopyFillIcon,
    thick: () => {throw new Error("cannot be thick")},
  },
  "email": {
    normal: EmailIcon,
    fill: () => {throw new Error("cannot be fill")},
    thick: EmailThickIcon,
  },
}

export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'fill' | 'thick'> {
  icon: IconKey
  size?: number
  fill?: boolean
  thick?: boolean
  color?: string
}

export function Icon({ icon, size = 24 , fill=false, thick=false, color, ...props }: IconProps) {
  const IconComponent = iconMap[icon][fill ? 'fill' : thick ? 'thick' : 'normal'];
  return <IconComponent width={size} height={size} style={{fill: color, color}} {...props} />;
}