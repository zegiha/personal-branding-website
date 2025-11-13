import { styled } from "@linaria/react";
import { Col } from "../../../../../shared/ui/flex";
import { ComponentProps, ReactNode } from "react";

export function HeadlineContainer({
  children,
  ...props
}: {
  children: ReactNode
} & ComponentProps<typeof Col>) {
  return <Container width='fill' {...props}>{children}</Container>
}

const Container = styled(Col)`
  padding: 32px 0;
`;