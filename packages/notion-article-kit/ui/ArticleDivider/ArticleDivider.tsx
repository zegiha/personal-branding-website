import * as st from "./style.css";

export function ArticleDivider() {
  return (
    <div className={`article-divider ${st.container}`}>
      <div className={st.divider} />
    </div>
  );
}
