import styled from "@emotion/styled";

export const Body = styled.div`
  width: 100vw;
  height: auto;
`;

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
`;
//박스 보(베스트 게시글) 영역
export const BoxBoardArea = styled.div`
  width: 100%;
  height: auto;
`;
export const BoxBoardTitle = styled.div`
  width: 100%;
  height: 60px;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  padding-top: 10px;
`;
export const BoxBoards = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const BoxBoardWrapper = styled.div`
  width: 280px;
  height: 257px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  background-color: green;
  &:hover {
    transform: scale(1.05);
    transition: all 0.5s;
  }
`;
//목록 조회 영역
export const SearchListArea = styled.div`
  width: 100%;
  height: auto;
  margin-top: 20px;
`;
export const SearchBarWrapper = styled.div`
  width: 100%;
  height: 60px;
  margin: 20px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const SearchInputBox = styled.div`
  width: 775px;
  height: 55px;
  background-color: #f2f2f2;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 5px;
`;
export const SearchIcon = styled.img`
  width: 40px;
  height: 40px;
`;
export const SearchInput = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  outline: none;
  background-color: #f2f2f2f2;
  font-size: 16px;
  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: black;
  }
`;
export const SearchDate = styled.div`
  width: 244px;
  height: 52px;
  border: 1px solid #bdbdbd;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #bdbdbd;
  text-align: center;
  padding-top: 12px;
`;
export const SearchButton = styled.button`
  width: 94px;
  height: 52px;
  background-color: black;
  color: white;
  border-radius: 10px;
`;
export const SearchListWrapper = styled.div`
  width: 100%;
  height: auto;
  border-bottom: 2px solid black;
  border-top: 2px solid black;
`;

export const TitleRow = styled.div`
  display: flex;
  height: 52px;
  align-items: center;
  flex-direction: row;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`;
// export const AllCheck = styled.div`
//   width: 10%;
//   text-align: center;
// `;
export const TitleNum = styled.div`
  width: 10%;
  text-align: center;
`;
export const TitleTitle = styled.div`
  width: 65%;
  text-align: center;
`;
export const TitleWriter = styled.div`
  width: 10%;
  text-align: center;
`;
export const TitleDate = styled.div`
  width: 15%;
  text-align: center;
`;
export const Row = styled.div`
  display: flex;
  height: 52px;
  flex-direction: row;
  align-items: center;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  border-top: 0.5px solid #bdbdbd;
`;
// export const Check = styled.div`
//   width: 10%;
//   text-align: center;
// `;
export const Num = styled.div`
  width: 10%;
  text-align: center;
`;
export const Title = styled.div`
  width: 65%;
  text-align: center;
  cursor: pointer;
`;
export const Writer = styled.div`
  width: 10%;
  text-align: center;
`;
export const Date = styled.div`
  width: 15%;
  text-align: center;
`;

export const FunctionButtonArea = styled.div`
  width: 100%;
  height: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: right;
`;
export const WriteNewButton = styled.button`
  width: 94px;
  height: 52px;
  background-color: black;
  color: white;
  border-radius: 10px;
`;
// export const DeleteBoardsButton = styled.button`
//   width: 94px;
//   height: 52px;
//   background-color: black;
//   color: white;
//   border-radius: 10px;
//   margin-right: 20px;
// `;
