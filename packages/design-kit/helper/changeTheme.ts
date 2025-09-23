import { ThemeEnum } from "../const/ThemeEnum"
import { getThemeModeFromClient } from "./getThemeModeFromClient"

export async function changeTheme(theme: ThemeEnum) {
  let prevTheme: Array<string> | undefined = undefined

  try {
    if(window != undefined) {
      const html = document.querySelector('html')
      if(!html) throw new Error('window is not undefined, but html is undefined')

      const themeMode = getThemeModeFromClient()

      prevTheme = Array.from(html.classList)

      html.classList.remove(...(Object.values(ThemeEnum).map(v => `${v}-palette`)))
      html.classList.remove(...(Object.values(ThemeEnum).map(v => `${v}-radius`)))
      html.classList.remove(...(Object.values(ThemeEnum).map(v => `${v}-typography`)))
      html.classList.remove(...(Object.values(ThemeEnum).map(v => `${v}-${themeMode}`)))
      html.classList.add(`${theme}-palette`, `${theme}-radius`, `${theme}-typography`, `${theme}-${themeMode}`)
    }

    await fetch('/api/theme', {
      method: 'POST',
      body: JSON.stringify({ theme }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch(e) {
    console.error(e)

    alert('테마를 바꾸지 못했어요')

    if(prevTheme !== undefined && window !== undefined) {
      const html = document.querySelector('html')
      if(!html) throw new Error('window is not undefined, but html is undefined')

     prevTheme.forEach((v) => {
       html.classList.add(v)
     })
    }
  }
}
