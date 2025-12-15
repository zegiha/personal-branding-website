import { cn } from "@/utils";
import { Icon } from "@/components";
import { controlButton } from "./st.css";
import { ReactNode } from "react";

export function Pagination({
  disablePrevious,
  disableNext,
  handlePrevious,
  handleNext,
  children,
}: {
  disablePrevious: boolean;
  disableNext: boolean;
  handlePrevious: () => void;
  handleNext: () => void;
  children?: ReactNode
}) {
  return (
    <>
      <button
        className={cn(controlButton.base, controlButton.medium)}
        onClick={handlePrevious}
        disabled={disablePrevious}
      >
        <Icon name="chevronLeft" size={16} />
      </button>
      {children}
      <button
        className={cn(controlButton.base, controlButton.medium)}
        onClick={handleNext}
        disabled={disableNext}
      >
        <Icon name="chevronRight" size={16} />
      </button>
    </>
  )
}