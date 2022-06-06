import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
const { confirm } = Modal;
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
  console.log(data);

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

  const showDeleteConfirm = () => {
    confirm({
      title: "게시글을 삭제하시겠습니까?",
      icon: <ExclamationCircleOutlined />,
      okText: "네",
      okType: "danger",
      cancelText: "아니요",

      onOk() {
        onClickDelete();
      },

      onCancel() {
        console.log("Cancel");
      },
    });
  };

  return (
    <>
      <BoardDetailUI
        onClickMoveToList={onClickMoveToList}
        onClickMoveToEdit={onClickMoveToEdit}
        onClickDelete={onClickDelete}
        onClickDisLike={onClickDisLike}
        onClickLike={onClickLike}
        showDeleteConfirm={showDeleteConfirm}
        router={router}
        data={data}
      />
    </>
  );
}
