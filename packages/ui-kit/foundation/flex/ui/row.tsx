import type { InterfaceFlex } from "../type";
import { Flex } from "./flex";

export function Row(props: Omit<InterfaceFlex, "flexDirection">) {
  return <Flex flexDirection={"row"} {...props} />;
}
