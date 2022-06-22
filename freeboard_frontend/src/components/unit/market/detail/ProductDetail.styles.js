import styled from "@emotion/styled";

export const Body = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100%;
`;
export const Wrapper = styled.div`
  width: 1200px;
  height: 100%;
  margin: 50px auto;
`;
// 게시물 영역
export const Board = styled.div`
  width: 100%;
  height: auto;
  padding: 80px 100px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;
export const BoardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
//게시물 헤더
export const BoardHeader = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
`;
export const BoardInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ProfileImg = styled.div`
  width: 45px;
  height: 45px;
  margin-right: 15px;
  /* border-radius: 50%; */
`;
export const PersonalImg = styled.img`
  width: 45px;
  height: 45px;
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const InfoWriter = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
`;
export const InfoCreate = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #828282;
`;
export const BoardFunction = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const linkImg = styled.img`
  width: 30px;
  height: 30px;
`;
export const locationImg = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 20px;
`;

//

export const ProductInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;
export const Pick = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 50px;
  top: 50px;
`;
export const PickIcon = styled.img`
  width: 40px;
  height: 40px;
`;
export const PickCount = styled.div`
  font-size: 20px;
`;
export const Remarks = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: #bdbdbd;
`;
export const Name = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
`;
export const Price = styled.div`
  font-weight: 700;
  font-size: 36px;
`;
export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 500px;
  height: 500px;
  margin-bottom: 30px;
`;
export const Contents = styled.div`
  width: 100%;
  height: auto;
  min-height: 200px;
`;

export const ShowMap = styled.div`
  width: 800px;
  height: 360px;
  margin: 0px auto;
`;
// 기능 버튼 영역
export const FunctionButtonArea = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #bdbdbd;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 100px 0px;
`;
export const FunctionButton = styled.button`
  width: 189px;
  height: 45px;
  padding: 14px 60px 14px 60px;
  margin: 0px 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid #bdbdbd;
  background-color: white;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;
