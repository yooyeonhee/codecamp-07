import * as S from "../../styles/emotion_list";
import { useQuery, gql } from "@apollo/client";
import { getDate } from "../../src/commons/libraries/utils";
import { useRouter } from "next/router";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      createdAt
    }
  }
`;

export default function ListPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const router = useRouter();

  const onClickTitleToDetail = (event) => {
    router.push(`/boards/${event.target.id}`);
  };

  const onClickToNew = () => {
    router.push(`/boards/new`);
  };

  return (
    <S.Body>
      <S.Wrapper>
        <S.BoxBoardArea>
          <S.BoxBoardTitle>베스트 게시글</S.BoxBoardTitle>
          <S.BoxBoards>
            <S.BoxBoardWrapper></S.BoxBoardWrapper>
            <S.BoxBoardWrapper></S.BoxBoardWrapper>
            <S.BoxBoardWrapper></S.BoxBoardWrapper>
            <S.BoxBoardWrapper></S.BoxBoardWrapper>
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
              <S.AllCheck>
                <input type="checkbox" />
              </S.AllCheck>
              <S.TitleNum>번호</S.TitleNum>
              <S.TitleTitle>제목</S.TitleTitle>
              <S.TitleWriter>작성자</S.TitleWriter>
              <S.TitleDate>날짜</S.TitleDate>
            </S.TitleRow>
            {data?.fetchBoards.map((el, indx) => (
              <S.Row key={el._id}>
                {/* <S.Num>{String(el._id).slice(-4).toUpperCase}</S.Num> */}
                <S.Check>
                  <input type="checkbox" />
                </S.Check>
                <S.Num>{indx + 1}</S.Num>
                <S.Title id={el._id} onClick={onClickTitleToDetail}>
                  {el.title}
                </S.Title>
                <S.Writer>{el.writer}</S.Writer>
                <S.Date>{getDate(el.createdAt)}</S.Date>
              </S.Row>
            ))}
          </S.SearchListWrapper>
        </S.SearchListArea>
        <S.FunctionButtonArea>
          <S.WriteNewButton onClick={onClickToNew}>등록하기</S.WriteNewButton>
        </S.FunctionButtonArea>
      </S.Wrapper>
    </S.Body>
  );
}
