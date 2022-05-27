import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;
const FETCH_BOARD_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function PaginationPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: AllBoardsCount } = useQuery(FETCH_BOARD_COUNT);
  const [startPage, setStartPage] = useState(1);
  const lastPage = Math.ceil(AllBoardsCount?.fetchBoardsCount / 10);
  const [nowPage, setNowPage] = useState("1");

  const InlineBox = styled.div``;
  const MyRow = styled.div`
    display: flex;
    flex-direction: row;
  `;
  //   const PageButton = styled.span`
  //     border: none;
  //     background-color: transparent;
  //     margin: 0 5px;
  //   `;

  const PageButton = styled.button`
    border: none;
    background-color: transparent;
    color: ${(props) => props.color};
  `;
  const MyWriter = styled.div`
    width: 200px;
  `;
  const MyTitle = styled.div`
    width: 400px;
  `;

  const onClickGetPage = (event: any) => {
    setNowPage(event.target.id);
    refetch({ page: Number(event.target.id) });
    console.log(event.target.id);
  };

  const onClickToPrev = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    refetch({ page: startPage - 10 });
  };

  const onClickToNext = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage((prev) => prev + 10);
      refetch({ page: startPage + 10 });
    }
  };

  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <MyRow key={el._id}>
          <MyWriter>{el.writer}</MyWriter>
          <MyTitle>{el.title}</MyTitle>
        </MyRow>
      ))}
      <InlineBox>
        <button onClick={onClickToPrev} disabled={startPage === 1}>
          {"<"}
        </button>
        {new Array(10).fill(1).map((_, index) => {
          return (
            index + startPage <= lastPage && (
              <PageButton
                key={index + 1}
                id={String(index + startPage)}
                onClick={onClickGetPage}
                color={nowPage === String(index + startPage) ? "red" : "black"}
              >
                {index + startPage}
              </PageButton>
            )
          );
        })}
        <button onClick={onClickToNext} disabled={startPage + 10 > lastPage}>
          {">"}
        </button>
      </InlineBox>
    </div>
  );
}
