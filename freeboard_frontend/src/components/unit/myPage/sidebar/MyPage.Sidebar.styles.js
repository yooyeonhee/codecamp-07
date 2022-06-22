import styled from "@emotion/styled";

export const Body = styled.div`
  width: 100%;
  height: 100%;
`;
export const Wrapper = styled.div`
  width: 1200px;
  height: 100vh;
  margin: 30px auto;
  display: flex;
  flex-direction: row;
`;

export const InfoWrapper = styled.div`
  width: 30%;
  height: 100vh;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
`;
export const ProfileIcon = styled.img`
  width: 50px;
  height: 50px;
  margin: 30px 0px;
`;
export const InfoName = styled.div`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 20px;
`;
export const InfoPointItem = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0px;
`;
export const InfoPointIcon = styled.img`
  margin-right: 10px;
`;
export const InfoPoint = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #4f4f4f;
`;
export const BuyPoint = styled.button`
  width: 140px;
  height: 25px;
  background-color: transparent;
  border-radius: 10px;
  border: 1px solid #ccc;
`;
// 모달
export const PointModal = styled.div`
  background-color: white;
  width: 460px;
  height: auto;
  min-height: 400px;
  border-radius: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const CancelIcon = styled.img`
  position: absolute;
  right: 20px;
  top: 20px;
`;
export const PointModalIcon = styled.img`
  width: 100px;
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translate(-50%, -50%);
`;
export const SelectWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const PointSelect = styled.select`
  width: 80%;
  height: 60px;
  border: none;
  border-bottom: 2px solid black;
  margin: 20px auto;
`;
export const PointButton = styled.button`
  border: none;
  width: 80%;
  height: 60px;
  border-radius: 10px;
  background-color: #ccc;
  color: white;
  font-weight: 500;
  font-size: 16px;
  margin: 0px auto;
`;
export const PointModalTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  width: 100%;
  margin-top: 170px;
  text-align: center;
`;
export const ListWrapper = styled.div`
  width: 80%;
  height: 100vh;
  background-color: red;
`;
