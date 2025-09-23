import { ThemeEnum } from "../const/ThemeEnum"
import { getThemeModeFromClient } from "./getThemeModeFromClient"

export async function changeTheme(theme: ThemeEnum) {
  try {
    await fetch('/api/theme', {
      method: 'POST',
      body: JSON.stringify({ theme }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if(window != undefined) {
      const html = document.querySelector('html')
      if(!html) throw new Error('window is not undefined, but html is undefined')

      const themeMode = getThemeModeFromClient()

      html.classList.remove(...(Object.values(ThemeEnum).map(v => `${v}-palette`)))
      html.classList.remove(...(Object.values(ThemeEnum).map(v => `${v}-radius`)))
      html.classList.remove(...(Object.values(ThemeEnum).map(v => `${v}-typography`)))
      html.classList.remove(...(Object.values(ThemeEnum).map(v => `${v}-${themeMode}`)))
      html.classList.add(`${theme}-palette`, `${theme}-radius`, `${theme}-typography`, `${theme}-${themeMode}`)
    }
  } catch(e) {
    console.error(e)
  }
}
