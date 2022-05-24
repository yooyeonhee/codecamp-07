import styled from "@emotion/styled";
import { useState } from "react";

const StarPoint = [1, 2, 3, 4, 5];

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const Wrapper = styled.div`
    display: flex;
  `;

  const TempStar = styled.div`
    width: 50px;
    height: 50px;
    background-image: url(${(props: { active: boolean }) =>
      props.active ? "/11-rate/Star_color.png" : "/11-rate/Star_black.png"});
    background-position: center;
    background-repeat: no-repeat;
  `;
  const ResultScore = styled.div`
    font-weight: bold;
  `;

  const onClickStar = (num: number) => {
    setRating(num);
    if (rating === num) {
      setRating(0);
      alert(`점수 입력을 취소합니다.`);
    } else {
      alert(`${num}점을 입력하셨습니다.`);
    }
  };

  return (
    <>
      <Wrapper>
        {StarPoint.map((num) => {
          return (
            <TempStar active={num <= rating} onClick={() => onClickStar(num)} />
          );
        })}
      </Wrapper>
      <ResultScore>{rating}점</ResultScore>
    </>
  );
};
export default StarRating;
