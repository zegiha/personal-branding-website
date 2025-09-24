import katex from "katex";

function renderInlineKatex(rawText: string) {
  return rawText.split(/(\§.*\§)/g).map((v, i) => {
    if (v == "") return;

    if (v.startsWith("§") && v.endsWith("§")) {
      const formular = v.slice(1, -1);

      const html = katex.renderToString(formular, {
        throwOnError: true,
        displayMode: false,
        output: "mathml",
      }) as any;

      if (html == undefined) return <span key={i}>Failed to load katex</span>;

      return <span key={i} dangerouslySetInnerHTML={{ __html: html }} />;
    } else {
      return <span key={i}>{v}</span>;
    }
  });
}

export function InlineKatex({ children }: { children: string }) {
  return <span>{renderInlineKatex(children)}</span>;
}
