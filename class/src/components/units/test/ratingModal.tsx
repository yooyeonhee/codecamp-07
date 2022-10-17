import styled from "@emotion/styled";
import React, { Dispatch, SetStateAction, useState } from "react";

interface IProps {
  select: boolean;
}
const RateModal: React.FC<{
  setRate: Dispatch<SetStateAction<number>>;
  rate: number;
}> = ({ setRate, rate }) => {
  const rateImg = [
    `/rate/1.svg`,
    `/rate/2.svg`,
    `/rate/3.svg`,
    `/rate/4.svg`,
    `/rate/5.svg`,
  ];
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const handleStarClick = (index: number) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] =
        i === index ? (clickStates[i] === true ? false : true) : false;
    }
    setClicked(clickStates);
    setRate((prev) => (prev === index + 1 ? 0 : index + 1));
  };
  return (
    <>
      <EmotionRates>
        {rateImg.map((el, index: number) => {
          return (
            <EmotionRate key={index} onClick={() => handleStarClick(index)}>
              <Img src={el} select={clicked[index]} />
            </EmotionRate>
          );
        })}
      </EmotionRates>
    </>
  );
};
const EmotionRates = styled.ul`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const EmotionRate = styled.li`
  list-style: none;
`;
const Img = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 auto;
  filter: ${(props: IProps) =>
    props.select
      ? "invert(41%) sepia(84%) saturate(3059%) hue-rotate(167deg) brightness(104%) contrast(102%)"
      : "none"};
  transform: ${(props: IProps) => (props.select ? "scale(1.2)" : "none")};
`;
export default RateModal;
