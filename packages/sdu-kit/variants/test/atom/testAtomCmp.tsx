import { styled } from "@linaria/react";
import { palette } from "../token/palette";
import { HTMLAttributes } from "react";

export function TestAtomCmp({...props}: {} & HTMLAttributes<HTMLDivElement>) {
  return <Container {...props}>Test Atom</Container>
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${palette.gray000};
  color: ${palette.gray900};
  transition: opacity 0.3s ease-in-out;
  font-size: 64px;
  &:hover {
    opacity: 0.5;
  }
`;