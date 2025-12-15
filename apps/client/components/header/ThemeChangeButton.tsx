'use client'

import {Icon} from "@/components/icon/icon";
import {
  iconLinkButton,
} from './st.css';
import {useEffect, useState} from "react";
import {changeTheme, getTheme} from "@/theme/utils";

export function ThemeChangeButton() {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null)

  useEffect(() => {
    const initTheme = async () => {
      const res = await getTheme()
      setTheme(res)
    }
    initTheme()
  }, [])

  const handleClick = async () => {
    const res = await changeTheme(theme === 'light' ? 'dark' : 'light')
    setTheme(res)
  }

  return (
    <button className={iconLinkButton} onClick={handleClick}>
      {theme ? (
        <Icon name={theme === 'light' ? 'dark' : 'light'} size={24} color="normal" />
      ):(
        <div style={{width: 24, height: 24, flex: '0'}}/>
      )}
    </button>
  )
}