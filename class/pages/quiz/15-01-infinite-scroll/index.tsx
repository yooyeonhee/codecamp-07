import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";

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
const MyDiv = styled.div`
  overflow: auto;
  height: 500px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Item = styled.div`
  width: 500px;
`;

export default function MapBoardPage() {
  const { data, fetchMore } = useQuery(FETCH_BOARDS);

  const loadFunc = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards)
          return {
            fetchBoards: [...prev.fetchBoards],
          };
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };
  return (
    <MyDiv>
      {/* <Row>
        <Item>작성자</Item>
        <Item>제목</Item>
      </Row> */}
      <InfiniteScroll
        pageStart={0}
        loadMore={loadFunc}
        hasMore={true}
        useWindow={false}
        // loader={
        //   <div className="loader" key={0}>
        //     Loading ...
        //   </div>
        // }
      >
        <MyDiv>
          {data?.fetchBoards.map((el: any) => (
            <Row key={el._id}>
              <Item>{el.writer}</Item>
              <Item>{el.title}</Item>
            </Row>
          ))}
        </MyDiv>
      </InfiniteScroll>
    </MyDiv>
  );
}
