import { cn } from "@/utils";
import { Text } from "@/components";
import { controlButton } from "./st.css";

export function Navigation({
  handleSlideTo,
  activeIndex,
  total,
}: {
  handleSlideTo: (index: number) => void;
  activeIndex: number;
  total: number;
}) {
  const activeNumber = activeIndex + 1;

  const getPageNumbers = () => {
    const maxVisible = 5;
    let start = Math.max(1, activeNumber - Math.floor(maxVisible / 2));
    let end = Math.min(total, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return getPageNumbers().map((v) => (
    <button
      key={v}
      className={cn(
        activeNumber === v ? controlButton.active : controlButton.base,
        controlButton.medium
      )}
      onClick={() => handleSlideTo(v - 1)}
    >
      <Text type='label' size='medium' color={activeNumber === v ? 'normal' : 'weak'}>
        {v}
      </Text>
    </button>
  ))
}