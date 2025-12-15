'use client'

import { RefObject, useEffect, useState } from "react";
import { TypeArticleContent } from "notion-article-kit";
import { cn } from "@/utils";
import {
  navPositionWrap,
  navContainer,
  navItem,
  navItemActive,
  navText,
  navTextActive,
} from "./styles/contentSection.css";

type NavProps = {
  articleRef: RefObject<HTMLDivElement | null>;
  content: Array<TypeArticleContent | undefined>;
};

type NavItem = {
  id: string;
  text: string;
};

export function Nav({ articleRef, content }: NavProps) {
  const [nav, setNav] = useState<Array<NavItem>>([]);
  const [activeIds, setActiveIds] = useState<Record<string, boolean>>({});

  // heading에 id 추가 및 nav 데이터 생성
  useEffect(() => {
    if (articleRef.current) {
      const headings = Array.from(articleRef.current.querySelectorAll('h1, h2, h4'));
      const navItems: Array<NavItem> = [];

      headings.forEach((heading) => {
        const text = heading.textContent || '';
        let id = text;

        if(navItems.some(v => v.text === text)) {
          for(let i = navItems.length - 1; i >= 0; i--) {
            if(navItems[i].text === text) {
              const pastText = navItems[i].text;
              if(navItems[i].id === text) {
                id = `${text}-1`

              } else {
                id = `${text}-${Number(pastText[pastText.length - 1]) + 1}`;
              }
              break;
            }
          }
        }

        heading.id = id;

        navItems.push({ id, text });
      });

      setNav(navItems);

      const newActiveIds: Record<string, boolean> = {};
      navItems.forEach(v => {
        newActiveIds[v.id] = true;
      })
      setActiveIds({...newActiveIds});
    }
  }, [content]);

  // Scroll 이벤트로 현재 섹션 감지
  useEffect(() => {
    if (!articleRef.current || nav.length === 0) return;

    const checkVisibility = () => {
      const newActiveIds: Record<string, boolean> = {};
      const viewportTop = window.scrollY;
      const viewportBottom = viewportTop + window.innerHeight;

      // 각 헤드라인의 위치 정보와 가시성 확인
      const headlineInfo: Array<{ id: string; top: number; bottom: number; isVisible: boolean }> = [];

      nav.forEach(item => {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          // 요소가 뷰포트에 보이는지 확인
          const isVisible = elementTop < viewportBottom && elementBottom > viewportTop;

          headlineInfo.push({
            id: item.id,
            top: elementTop,
            bottom: elementBottom,
            isVisible
          });

          newActiveIds[item.id] = isVisible;
        } else {
          newActiveIds[item.id] = false;
        }
      });

      // 보이는 헤드라인이 하나도 없으면, 위쪽에 있는 헤드라인 중 가장 아래에 있는 것을 active
      const hasVisibleHeadline = headlineInfo.some(h => h.isVisible);
      if (!hasVisibleHeadline && headlineInfo.length > 0) {
        // 뷰포트 상단보다 위에 있는 헤드라인들 필터링
        const headlinesAbove = headlineInfo.filter(h => h.bottom < viewportTop);

        if (headlinesAbove.length > 0) {
          // 위에 있는 헤드라인 중 가장 아래에 있는 것 (가장 가까운 것)
          const closest = headlinesAbove.reduce((prev, curr) =>
            curr.top > prev.top ? curr : prev
          );

          // 모두 false로 초기화
          Object.keys(newActiveIds).forEach(key => {
            newActiveIds[key] = false;
          });

          // 가장 가까운 위쪽 헤드라인만 true
          newActiveIds[closest.id] = true;
        } else {
          // 위에 헤드라인이 없으면 모두 inactive
          Object.keys(newActiveIds).forEach(key => {
            newActiveIds[key] = false;
          });
        }
      }

      setActiveIds(newActiveIds);
    };

    // 초기 체크
    checkVisibility();

    // 스크롤 이벤트 리스너 (throttle 적용)
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkVisibility();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [nav]);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: "center",
    });
  };

  return (
    <div className={navPositionWrap}>
      <nav className={navContainer}>
      {nav.map((v) => (
          <div
            key={v.id}
            className={cn(navItem, activeIds[v.id] ? navItemActive : undefined)}
            onClick={() => handleClick(v.id)}
          >
            <span className={cn(navText, activeIds[v.id] ? navTextActive : undefined)}>
              {v.text}
            </span>
          </div>
        ))}
      </nav>
    </div>
  )
}
