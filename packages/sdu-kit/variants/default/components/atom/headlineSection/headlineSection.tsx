import { styled } from "@linaria/react"
import { ComponentProps, ReactNode } from "react"
import { Col } from "../../../../../shared/ui/flex"
import { Text } from "../../../foundation/text"

export function HeadlineSection({
  headline,
  children,
  ...props
}: {
  headline: string
  children: ReactNode
} & ComponentProps<typeof Col> & ComponentProps<typeof Text>) {
  return <Container width={'fill'} alignItems={'center'} {...props}>
    <Col width={'fill'} maxWidth={1100} gap={24}>
      <Text
        as="h2"
        variant="headline"
        size="medium"
        color="strong"
        weight="bold"
      >
        {headline}
      </Text>
      {children}
    </Col>
  </Container>
}

const Container = styled(Col)`
  padding: 32px 24px;
`;
