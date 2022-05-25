import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./BoardList.styles";

export default function BoardListUI(props) {
  return (
    <S.Body>
      <S.Wrapper>
        <S.BoxBoardArea>
          <S.BoxBoardTitle>베스트 게시글</S.BoxBoardTitle>
          <S.BoxBoards>
            {props.best?.fetchBoardsOfTheBest.map((el) => (
              <S.BoxBoardWrapper key={el._id}>
                <div>{el.title}</div>
                <div>{el.writer}</div>
                <div>{getDate(el.createdAt)}</div>
                <div>{el.likeCount}</div>
              </S.BoxBoardWrapper>
            ))}
          </S.BoxBoards>
        </S.BoxBoardArea>

        {/* 목록 영역 */}
        <S.SearchListArea>
          <S.SearchBarWrapper>
            <S.SearchInputBox>
              <S.SearchIcon src="/list/search.png" />
              <S.SearchInput type="text" placeholder="제목을 검색해주세요." />
            </S.SearchInputBox>
            <S.SearchDate>YYYY.MM.DD ~ YYYY.MM.DD</S.SearchDate>
            <S.SearchButton>검색하기</S.SearchButton>
          </S.SearchBarWrapper>
          <S.SearchListWrapper>
            <S.TitleRow>
              {/* <S.AllCheck>
                <input
                  type="checkbox"
                  onChange={props.onClickCheckAll}
                  checked={
                    props.checkList.length === props.data?.fetchBoards.length
                  }
                />
              </S.AllCheck> */}
              <S.TitleNum>번호</S.TitleNum>
              <S.TitleTitle>제목</S.TitleTitle>
              <S.TitleWriter>작성자</S.TitleWriter>
              <S.TitleDate>날짜</S.TitleDate>
            </S.TitleRow>
            {props.data?.fetchBoards.map((el, indx) => (
              <S.Row
                key={el._id}
                id={el._id}
                onClick={props.onClickTitleToDetail}
              >
                {/* <S.Num>{String(el._id).slice(-4).toUpperCase}</S.Num> */}
                {/* <S.Check>
                  <input
                    type="checkbox"
                    onChange={() => props.onCheckedItem(el)}
                    checked={props.isChecked(el)}
                  />
                </S.Check> */}
                <S.Num>{indx + 1}</S.Num>
                <S.Title>{el.title}</S.Title>
                <S.Writer>{el.writer}</S.Writer>
                <S.Date>{getDate(el.createdAt)}</S.Date>
              </S.Row>
            ))}
          </S.SearchListWrapper>
        </S.SearchListArea>
        <S.FunctionButtonArea>
          {/* <S.DeleteBoardsButton onClick={props.onClickDeleteBoards}>
            삭제하기
          </S.DeleteBoardsButton> */}
          <S.WriteNewButton onClick={props.onClickToNew}>
            등록하기
          </S.WriteNewButton>
        </S.FunctionButtonArea>
      </S.Wrapper>
    </S.Body>
  );
}
