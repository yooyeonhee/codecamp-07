import { gql, useMutation, useQuery } from "@apollo/client";

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;
const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;
export default function OptimisticUIPage() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "62b1620403610b002998fbc0" },
  });
  const [likeBoard] = useMutation(LIKE_BOARD);

  const onClickLike = () => {
    likeBoard({
      variables: {
        boardId: "62b1620403610b002998fbc0",
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: "62b1620403610b002998fbc0" },
        },
      ],
      //   optimisticResponse: {
      //     likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
      //   },
      //   update(cache, { data }) {
      //     cache.writeQuery({
      //       query: FETCH_BOARD,
      //       variables: {
      //         boardId: "62b1620403610b002998fbc0",
      //       },
      //       data: {
      //         fetchBoard: {
      //           _id: "62b1620403610b002998fbc0",
      //           __typename: "Board",
      //           likeCount: data.likeBoard,
      //         },
      //       },
      //     });
      //   },
    });
  };
  return (
    <>
      <div>현재카운트(좋아요):{data?.fetchBoard.likeCount}</div>
      <img
        onClick={onClickLike}
        style={{ width: "50px" }}
        src="/33-quiz/like.png"
      />
      좋아요 올리기 버튼
    </>
  );
}
