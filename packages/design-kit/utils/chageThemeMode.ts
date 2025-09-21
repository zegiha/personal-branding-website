import { ThemeModeEnum } from '../const/ThemeModeEnum'
import { getThemeFromClient } from './getThemeFromClient'

export async function changeThemeMode(themeMode: ThemeModeEnum) {
  try {
    await fetch(`/api/theme/mode`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ themeMode })
    })

    if(window !== undefined) {
      const html = document.querySelector('html')
      if(!html) throw new Error('window is not undefined but html is undefined')

      const theme = getThemeFromClient()

      html.classList.remove(...(Object.values(ThemeModeEnum).map(mode => `${theme}-${mode}`)))
      html.classList.add(`${theme}-${themeMode}`)
    }
  } catch(e) {
    console.error(e)
  }
}
