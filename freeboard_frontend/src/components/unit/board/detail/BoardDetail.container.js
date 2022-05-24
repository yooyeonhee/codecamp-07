import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";

export default function BoardDetailFunction() {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.number },
  });
  // console.log(router.query)
  // console.log(data)s

  const onClickMoveToEdit = () => {
    router.push(`/boards/${router.query.number}/edit`);
  };
  const onClickMoveToList = () => {
    router.push(`/boards`);
  };

  const onClickDelete = async () => {
    try {
      await deleteBoard({
        variables: { boardId: router.query.number },
      });
    } catch (error) {
      alert(error.message);
    }
    console.log(router.query.number);
    router.push(`/boards`);
  };

  const onClickLike = async () => {
    try {
      await likeBoard({
        variables: { boardId: router.query.number },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: router.query.number },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
    // console.log(data.fetchBoard.youtubeUrl);
  };
  const onClickDisLike = async () => {
    try {
      await dislikeBoard({
        variables: { boardId: router.query.number },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: router.query.number },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <BoardDetailUI
        onClickMoveToList={onClickMoveToList}
        onClickMoveToEdit={onClickMoveToEdit}
        onClickDelete={onClickDelete}
        onClickDisLike={onClickDisLike}
        onClickLike={onClickLike}
        router={router}
        data={data}
      />
    </>
  );
}
