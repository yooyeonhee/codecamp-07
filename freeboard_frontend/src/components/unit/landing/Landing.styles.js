import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
/*keyframe*/
/*놀이기구 회전*/
export const rotation = keyframes`
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
`;

/*배경 색 변경*/
export const sky = keyframes`
 0% {background-color: #b08fcc;}
    25% {background-color: #b1e1e2;}
    50% {background-color: #fcd2e2;}
    75% {background-color: #636888;}
    100% {background-color: #b08fcc;}
`;
/*태양 회전*/
const sun = keyframes`
    0% {opacity: 0; transform: rotate(-90deg);}
    25% {opacity: 1; transform: rotate(-30deg);}
    50% {opacity: 1; transform: rotate(30deg);}
    75% {opacity: 0; transform: rotate(90deg);}
    100% {opacity: 0; transform: rotate(-90deg);}
`;
/*밤에 요소 제거*/
const day = keyframes`
    0% {opacity: 0;}
    25% {opacity: 1;}
    50% {opacity: 1;}
    75% {opacity: 0;}
    100% {opacity: 0;}
`;

/*사람과 구름 움직임*/
const flow = keyframes`
    0% {left:0%; opacity: 0;}
    10% {opacity: 1;}
    80% {opacity: 1;}
    100% {left:90%; opacity: 0;}
`;

export const Body = styled.div`
  background-color: #b1e1e2;
  height: 100vh;
  width: 100%;
  /*자식 요소가 범위를 벗어나도 스크롤바가 생기지 않도록 함*/
  overflow: hidden;
  animation: ${sky} 20s infinite linear;
`;
export const Button = styled.button`
  width: 250px;
  height: 50px;
  border: 1px solid black;
  border-radius: 30px;
  background-color: transparent;
  color: black;
  position: absolute;
  bottom: -80px;
  left: 350px;

  &:hover {
    transform: scale(1.05);
    transition: all 0.5s;
  }
`;
export const Wrapper = styled.div`
  width: 1000px;
  height: 400px;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -70%);
`;
export const Sky = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;
export const Sun = styled.img`
  position: absolute;
  top: -150px;
  left: 50%;
  margin-left: -100px;
  transform-origin: center 500px;
  animation: ${sun} linear 20s infinite;
`;

export const Cloud1 = styled.img`
  position: absolute;
  top: -30px;
  left: 10%;
  animation: ${flow} linear 10s infinite;
`;
export const Cloud2 = styled.img`
  position: absolute;
  top: 20px;
  left: 0%;
  animation: ${flow} linear 20s infinite;
`;
export const Town = styled.div``;

export const Circle = styled.img`
  position: absolute;
  bottom: 100px;
  left: 50%;
  margin-left: -165px;
  opacity: 0.7;
  animation: ${rotation} linear 20s infinite;
`;
export const Night = styled.img`
  position: absolute;
  bottom: 0px;
  left: 40px;
`;
export const Day = styled.img`
  position: absolute;
  bottom: 0px;
  left: 40px;
  animation: ${day} linear 20s infinite;
`;
export const People = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0px;
  left: 0px;
  animation: ${day} linear 20s infinite;
`;
export const Family = styled.img`
  position: absolute;
  left: 0%;
  bottom: 0px;
  animation: ${flow} linear 9s infinite;
`;
export const Man = styled.img`
  position: absolute;
  left: 0%;
  bottom: 0px;
  animation: ${flow} linear 20s infinite;
`;
