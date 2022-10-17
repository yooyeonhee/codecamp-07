import styled from "@emotion/styled";
import { useEffect, useState } from "react";

export const Body = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f8f8f8;
`;
export const Wrapper = styled.div`
  width: 450px;
  height: 550px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Content = styled.div`
  width: 100%;
  height: 90%;
  background-color: aliceblue;
`;
export const ChooseClose = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  width: 100%;
  height: 10%;
`;
export const OneDay = styled.div`
  font-size: 1rem;
`;
export const Close = styled.div`
  font-size: 1rem;
`;

export default function test() {
  const [showModal, setShowModal] = useState(false);
  // const [before, setBefore] = useState("");
  // const [now, setNow] = useState();
  useEffect(() => {
    const BEFORE = localStorage.getItem("visitBefore") || "";
    const NOW = Math.floor(new Date().getDate());
    console.log(BEFORE);
    if (BEFORE === "") {
      setShowModal(true);
    } else {
      if (NOW >= Number(BEFORE)) {
        setShowModal(true);
        localStorage.removeItem("visitBefore");
      } else {
        setShowModal(false);
      }
    }
  }, []);
  const onClickClose = () => {
    setShowModal(false);
  };
  const onClickTodayClose = () => {
    const expiry = new Date();
    const expiryDate: number = expiry.getDate() + 1;
    // 로컬스토리지 저장
    localStorage.setItem("visitBefore", String(expiryDate));
    setShowModal(false);
  };
  return (
    <Body>
      {showModal && (
        <Wrapper>
          <Content></Content>
          <ChooseClose>
            <OneDay onClick={onClickTodayClose}>하루동안 열지 않기</OneDay>
            <Close onClick={onClickClose}>닫기</Close>
          </ChooseClose>
        </Wrapper>
      )}
    </Body>
  );
}
