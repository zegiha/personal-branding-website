import katex from 'katex';

export function InlineKatex(rawText: string) {
  return rawText.split(/(\§.*\§)/g).map((v, i) => {
    if (v == '') return;

    if (v.startsWith('§') && v.endsWith('§')) {
      const formular = v.slice(1, -1)

      const html = katex.renderToString(formular, {
        throwOnError: true,
        displayMode: false,
      }) as any

      if (html == undefined) return <span key={i}>Failed to load katex</span>

      return <span key={i} dangerouslySetInnerHTML={{ __html: html }} />
    } else {
      return <span key={i}>{v}</span>
    }
  })
}
