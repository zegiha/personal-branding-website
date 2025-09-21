'use client'

import { ThemeEnum } from "design-kit/const/ThemeEnum";
import styles from "./page.module.css";
import { changeTheme, changeThemeMode, getThemeModeFromClient } from "design-kit/client";
import { ThemeModeEnum } from "design-kit/const/ThemeModeEnum";

export default function Home() {
  return (
    <div className={styles.page}>
      <button className={styles.button} onClick={() => {changeTheme(ThemeEnum.DEFAULT)}}>
        change theme
      </button>
      <button className={styles.button} onClick={() => {changeThemeMode(getThemeModeFromClient() == ThemeModeEnum.DARK ? ThemeModeEnum.LIGHT : ThemeModeEnum.DARK)}}>
        change theme mode
      </button>
    </div>
  );
}
