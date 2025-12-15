"use client"

import { container, segmentWrap, indicator, indicatorContainer, segmentText } from "./st.css"
import { Text } from "@/components";
import { useEffect, useRef } from "react";

export function SegmentControl<T extends string>({
  items,
  activeKey,
  setActiveKey,
}: {
  items: Array<{key: T, label: string}> 
  activeKey: T
  setActiveKey: (key: T) => void
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeIndicator = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(!activeIndicator?.current || !containerRef?.current) return;

    const activeKeyElement = containerRef.current.querySelector(`[data-active="true"]`) as HTMLElement | null;
    if(!activeKeyElement) return;

    const rect = activeKeyElement.getBoundingClientRect();

    activeIndicator.current.style.width = `${rect.width}px`;
    activeIndicator.current.style.left = `${activeKeyElement.offsetLeft}px`;
  }, [activeKey])
  

  return (
    <div ref={containerRef} className={container}>
      {items.map((item) => (
        <button key={item.key} className={segmentWrap} onClick={() => setActiveKey(item.key)}>
          <Text
            className={segmentText}
            data-active={activeKey === item.key}
            type='headline'
            size='medium'
            color={activeKey === item.key ? 'strong' : 'weak'}
          >
            {item.label}
            </Text>
        </button>
      ))}
      <div className={indicatorContainer}>
        <div ref={activeIndicator} className={indicator}/>
      </div>
    </div>
  )
}