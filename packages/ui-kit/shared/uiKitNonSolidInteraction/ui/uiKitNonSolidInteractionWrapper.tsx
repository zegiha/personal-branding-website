import cn from "classnames";
import type { ReactNode } from "react";
import st from "./nonSolidInteraction.module.css";

export function UiKitNonSolidInteractionWrapper({
  children,
  disabled,
}: {
  children: ReactNode;
  disabled: boolean;
}) {
  return (
    <>
      {children}
      {!disabled && <div className={cn(st.fakeBackground)} />}
    </>
  );
}
