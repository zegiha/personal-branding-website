import { uiMap as defaultUiMap } from "../../variants/default/const/uiMap";
import { Icon } from "../ui/icon";
import { Grid } from "../ui/grid";
import { Col, Flex } from "../ui/flex";
import { Row } from "../ui/flex";
import { uiMap as testUiMap } from "../../variants/test/const/uiMap";

const sharedUiMap = {
  flex: Flex,
  col: Col,
  row: Row,
  grid: Grid,
  icon: Icon,
} as const;

export const uiMap: {
  shared: typeof sharedUiMap,
  default: typeof defaultUiMap
  test: typeof testUiMap
} = {
  shared: sharedUiMap,
  default: defaultUiMap,
  test: testUiMap,
} as const;