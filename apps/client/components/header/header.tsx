import { ReactNode } from 'react';
import Link from 'next/link';
import {
  headerBase,
  headerFill,
  headerTransparent,
  content,
  logoWrapper,
  nav,
  textLinkButton,
  iconLinkButton,
  headerWrap,
} from './st.css';
import {ThemeChangeButton} from "./ThemeChangeButton";
import {
  Text,
  Icon,
} from '@/components';
import Logo from '@/public/assets/logo.svg'
import {semantic} from "@/theme/tokens";

// const navItems = [
//   { label: '서브 프로젝트', href: '/' },
//   { label: '놀이터', href: '/' },
//   { label: '블로그', href: '/article' },
//   { label: '시리즈', href: '/' },
//   { label: '포트폴리오', href: '/' },
// ];

type HeaderProps = {
  position?: 'fixed' | 'sticky'
  background?: 'fill' | 'transparent';
  children?: ReactNode;
  className?: string;
};

export function Header({ position='sticky', background='fill', children, className }: HeaderProps) {
  const headerClassName = [
    headerBase,
    background === 'fill' ? headerFill : headerTransparent,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={headerWrap} style={{position}}>
      <header className={headerClassName}>
        <div className={content}>
          <div className={logoWrapper}>
            <Link href="/article" style={{height: 23}}>
              <Logo fill={semantic.label.strong} />
            </Link>
          </div>
          <nav className={nav}>
            {/*{navItems.map((item) => (*/}
            {/*  <Link key={item.label} href={item.href} className={textLinkButton}>*/}
            {/*    <Text type="label" size="medium" color="normal">*/}
            {/*      {item.label}*/}
            {/*    </Text>*/}
            {/*  </Link>*/}
            {/*))}*/}
            {/*<Link href="/" className={iconLinkButton}>*/}
            {/*  <Icon name="search" size={24} color="normal" />*/}
            {/*</Link>*/}
            {/*<Link href="/" className={iconLinkButton}>*/}
            {/*  <Icon name="menu" size={24} color="normal" />*/}
            {/*</Link>*/}
            <ThemeChangeButton/>
          </nav>
        </div>
      </header>
      {children}
    </div>
  );
}
