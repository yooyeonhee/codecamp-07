import styled from "@emotion/styled";

export const Body = styled.div`
  width: 100%;
  height: 100%;
`;
export const Wrapper = styled.div`
  width: 1200px;
  height: 100%;
  margin: 50px auto;
`;
export const Title = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 36px;
`;
export const BoxBoards = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0px;
`;
export const BoxBoardWrapper = styled.div`
  width: 280px;
  height: 390px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
`;
export const ListOptionArea = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ListShowOption = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const Option = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  margin-right: 30px;
`;

export const SearchBarWrapper = styled.div`
  height: 100%;
  margin: 20px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
export const SearchInputBox = styled.div`
  width: 280px;
  height: 50px;
  background-color: #f2f2f2;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 5px;
`;
export const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 20px;
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
  width: 280px;
  height: 50px;
  border: 1px solid #bdbdbd;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  padding-top: 12px;
  margin: 0px 20px;
`;
export const SearchButton = styled.button`
  width: 78px;
  height: 52px;
  background-color: black;
  color: white;
`;
export const ListArea = styled.div`
  width: 100%;
  height: 1000px;
  overflow: auto;
  padding: 0px 30px;
  margin-bottom: 30px;
`;
export const ListItem = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  padding: 0px 20px;
  flex-direction: row;
  align-items: center;
  border-top: 0.5px solid #bdbdbd;
  border-bottom: 0.5px solid #bdbdbd; ;
`;
export const ItemImg = styled.div`
  width: 160px;
  height: 160px;
  background-color: red;
  margin-right: 30px;
`;
export const ItemInfo = styled.div`
  width: 730px;
  height: 160px;
  margin: 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;
export const ItemName = styled.div`
  font-weight: 500;
  font-size: 24px;
`;
export const ItemRemarks = styled.div`
  font-size: 16px;
  color: #4f4f4f;
`;
export const ItemTags = styled.div`
  font-size: 16px;
  color: #bdbdbd;
`;
export const ItemBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
export const Seller = styled.div`
  font-size: 16px;
  color: #4f4f4f;
  margin-right: 30px;
`;
export const PickedCount = styled.div`
  font-size: 16px;
  color: #4f4f4f;
`;

export const ItemPrice = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const PriceIcon = styled.img`
  width: 30px;
  height: 30px;
`;
export const Price = styled.div`
  font-size: 24px;
`;
export const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
`;
export const NewButton = styled.button`
  width: 120px;
  height: 50px;
`;
