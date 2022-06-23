import { gql, useMutation, useQuery } from "@apollo/client";

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;
const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId)
  }
`;
export default function OptimisticUIPage() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "62b173ef03610b002998fc3d" },
  });
  const [likeBoard] = useMutation(LIKE_BOARD);

  const onClickLike = () => {
    likeBoard({
      variables: {
        boardId: "62b173ef03610b002998fc3d",
      },
      //   refetchQueries: [
      //     {
      //       query: FETCH_BOARD,
      //       variables: { boardId },
      //     },
      //   ],
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: {
            boardId: "62b173ef03610b002998fc3d",
          },
          data: {
            fetchBoard: {
              _id: "62b173ef03610b002998fc3d",
              __typename: "Board",
              likeCount: data.likeBoard,
            },
          },
        });
      },
    });
  };
  return (
    <>
      <div>현재카운트(좋아요):{data?.fetchBoard.likeCount}</div>
      <button onClick={onClickLike}>좋아요 올리기 버튼</button>
    </>
  );
}
