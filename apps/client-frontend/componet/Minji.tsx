'use client';

import { styled } from "@linaria/react";
import { useState } from "react";

export const Minji = () => {
  const [color, setColor] = useState<boolean>(false);

  return (
    <>
      <StyledMinji $color={color}>Minji</StyledMinji>
      <Button onClick={() => setColor(!color)}>컷</Button>
    </>
  );
};

const Button = styled.button`
  font-size: 120px;
  color: white;
  background-color: black;
  border: 1px solid white;
  padding: 10px 20px;
  border-radius: 5px;
`;

const StyledMinji = styled.div<{$color?: boolean}>`
  font-size: 120px;
  color: ${props => props?.$color ? 'red': 'white'};
`;