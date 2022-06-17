import * as S from "./ProductList.styles";

export default function ProductListUI(props) {
  return (
    <S.Body>
      <S.Wrapper>
        <S.Title>상품 리스트</S.Title>
        <S.BoxBoards>
          {props.best?.fetchUseditemsOfTheBest.map((el) => (
            <S.BoxBoardWrapper key={el._id}>
              <div>{el.name}</div>
              <div>{el.remarks}</div>
              <div>{el.contents}</div>
              <div>{el.price}</div>
              <div>{el.pickedCount}</div>
            </S.BoxBoardWrapper>
          ))}
        </S.BoxBoards>
      </S.Wrapper>
    </S.Body>
  );
}
