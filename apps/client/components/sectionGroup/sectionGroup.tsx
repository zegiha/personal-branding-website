import { PropsWithChildren } from "react";
import {backgroundEven, backgroundOdd, container} from "./st.css";
import {cn} from "@/utils";

export function SectionGroup({
  children,
  backgroundColor
}: PropsWithChildren & {
  backgroundColor?: 'odd' | 'even'
}) {
  const backgroundColorClassName = backgroundColor ?
    backgroundColor === 'odd' ? backgroundOdd : backgroundEven :
    ''
  return (
    <div className={cn(
      container,
      backgroundColorClassName
    )}>
      {children}
    </div>
  );
}