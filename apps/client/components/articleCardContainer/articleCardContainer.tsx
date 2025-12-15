import { PropsWithChildren } from "react";
import { container } from "./st.css";

export function ArticleCardContainer({
  children,
}: PropsWithChildren) {
  return (
    <div className={container}>
      {children}
    </div>
  )
}