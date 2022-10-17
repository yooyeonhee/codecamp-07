import styled from "@emotion/styled";
import { Rate } from "antd";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";

const Img = styled.img`
  width: 30px;
  height: 30px;
`;
const customIcons: Record<number, React.ReactNode> = {
  1: <Img src="/rate/1.svg" />,
  2: <Img src="/rate/2.svg" />,
  3: <Img src="/rate/3.svg" />,
  4: <Img src="/rate/4.svg" />,
  5: <Img src="/rate/5.svg" />,
};

const RateModal: React.FC<{
  setRate: Dispatch<SetStateAction<number>>;
  rate: number;
}> = ({ setRate, rate }) => (
  <>
    <StyleRate
      defaultValue={3}
      character={({ index }: { index: number }) => customIcons[index + 1]}
      onChange={setRate}
    />
  </>
);

const StyleRate = styled(Rate)`
  > li {
    :nth-child(3) {
      filter: invert(49%) sepia(52%) saturate(3416%) hue-rotate(161deg)
        brightness(95%) contrast(103%);
    }
  }
`;

export default RateModal;
