"use client"

import {useState, useEffect, RefObject} from "react";
import {Header} from "@/components";
import {ReadingProgress} from "./readingProgress";

export function HeaderAndProgress({
  articleRef,
}: { articleRef: RefObject<HTMLDivElement | null> }) {
  const [headerFill, setHeaderFill] = useState<boolean>(false)
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 100) {
        setHeaderFill(true)
      } else {
        setHeaderFill(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Header background={headerFill ? 'fill' : 'transparent'} position={'fixed'}>
      {headerFill && <ReadingProgress articleRef={articleRef}/>}
    </Header>
  )
}