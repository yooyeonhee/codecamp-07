import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { DELETE_COMMENT, FETCH_COMMENTS } from "./BoardCommentList.queries";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { useState } from "react";

export default function BoardCommentListFunction() {
  const router = useRouter();

  const { data, fetchMore } = useQuery(FETCH_COMMENTS, {
    variables: { boardId: router.query.number },
  });
  const [deleteBoardComment] = useMutation(DELETE_COMMENT);

  // 댓글 삭제 modal & password
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [checkPassword, setCheckPassword] = useState("");
  const [commentId, setCommentId] = useState("");

  // 댓글 수정
  const [address, setAddress] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  // 삭제 modal
  const showModal = (event) => {
    setIsModalVisible(true);
    setCommentId(event.target.id);
    console.log(event.target.id);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    onClickDelete();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onChangeCheckPassword = (event) => {
    setCheckPassword(event.target.value);
  };

  // 댓글 삭제 함수
  const onClickDelete = async () => {
    try {
      await deleteBoardComment({
        variables: {
          boardCommentId: commentId,
          password: checkPassword,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: {
              boardId: router.query.number,
            },
          },
        ],
      });
    } catch (error) {
      console.log(error);
      alert(error.message); //백엔드 개발자가 만든 error 메시지를 보여줌
    }
  };

  // 댓글 수정 함수
  const onClickUpdate = async (event) => {
    console.log(event.target);
    setAddress(event.target.id);
    setIsEdit((prev) => !prev);
  };

  //댓글 무한 스크롤
  const loadFunc = () => {
    // 데이터가 있을 떄만 fetchMore 해준다.
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data.fetchBoardComments.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoardComments)
          return {
            fetchBoardComments: [...prev.fetchBoardComments],
          };
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return (
    <BoardCommentListUI
      data={data}
      isModalVisible={isModalVisible}
      onClickDelete={onClickDelete}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      onChangeCheckPassword={onChangeCheckPassword}
      onClickUpdate={onClickUpdate}
      loadFunc={loadFunc}
      address={address}
      setAddress={setAddress}
      isEdit={isEdit}
      setIsEdit={setIsEdit}
    />
  );
}
