'use server'

import { ReactNode } from "react";
import {getTheme, getThemeClass} from "@/theme/utils";
import {cn} from "@/utils";
import {
  paletteClass,
  radiusClass,
  motionClass,
  spacingClass,
} from "./tokens";

export async function ThemeProvider({
  children
}: {
  children: ReactNode
}) {
  const themeName = await getTheme()

  return (
    <body
      className={cn(
        paletteClass,
        radiusClass,
        motionClass,
        spacingClass,
        getThemeClass({themeMode: themeName})
      )}
    >
      {children}
    </body>
  )
}

