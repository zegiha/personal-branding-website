import { ComponentProps } from "react";
import { Flex, Row, Col } from "./flex";

export type SharedFlexSduType = {
  type: 'shared-flex';
  props: ComponentProps<typeof Flex>
}

export type SharedRowSduType = {
  type: 'shared-row';
  props: ComponentProps<typeof Row>
}

export type SharedColSduType = {
  type: 'shared-col';
  props: ComponentProps<typeof Col>
}
