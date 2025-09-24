import { InlineMath } from "react-katex";

function renderInlineKatex(rawText: string) {
  return rawText.split(/(§.*§)/g).map((v, i) => {
    if (v === "") return null;

    if (v.startsWith("§") && v.endsWith("§")) {
      const formula = v.slice(1, -1);

      try {
        return <InlineMath key={i} math={formula} />;
      } catch {
        return <span key={i}>Failed to load katex</span>;
      }
    } else {
      return <span key={i}>{v}</span>;
    }
  });
}

export function InlineKatex({ children }: { children: string }) {
  return <span>{renderInlineKatex(children)}</span>;
}
