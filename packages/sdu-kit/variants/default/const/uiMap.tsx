import { Icon } from "../foundation/icon";
import { Text } from "../foundation/text";
import { HeadlineSection } from "../components/atom/headlineSection/headlineSection";
import { HeadlineContainer } from "../components/atom/headlineContainer/headlineContainer";

export const uiMap = {
  icon: Icon,
  text: Text,
  headlineSection: HeadlineSection,
  headlineContainer: HeadlineContainer,
} as const;