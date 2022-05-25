import BoardCommentUI from "./BoardComment.presenter";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_COMMENT,
  FETCH_COMMENTS,
  DELETE_COMMENT,
  UPDATE_COMMENT,
} from "./BoardComment.queries";
import { useRouter } from "next/router";

export default function BoardCommentFunction() {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [comment, setComment] = useState("");
  const [character, setCharacter] = useState(0);
  const [rate, setRate] = useState(3);
  const [deleteBoardComment] = useMutation(DELETE_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_COMMENT);
  const [callGraphql] = useMutation(CREATE_COMMENT);
  const router = useRouter();
  //댓글 삭제 modal & password
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [checkPassword, setCheckPassword] = useState("");
  const [index, setIndex] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [commentId, setCommentId] = useState("");

  const { data: commentData } = useQuery(FETCH_COMMENTS, {
    variables: { boardId: router.query.number },
  });

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const onChangeComment = (event) => {
    setComment(event.target.value);
    setCharacter(event.target.value.length);
  };

  const onClickSubmit = async () => {
    // console.log(router.query.number);
    if (writer && password && comment) {
      try {
        //정보 저장 api 함수
        const result = await callGraphql({
          variables: {
            createBoardCommentInput: {
              writer,
              password: String(password),
              contents: comment,
              rating: rate,
            },
            boardId: router.query.number,
          },
          refetchQueries: [
            {
              query: FETCH_COMMENTS,
              variables: { boardId: router.query.number },
            },
          ],
        });
        console.log(result);
        // setData(result.data.createBoard._id)
      } catch (error) {
        console.log(error);
        alert(error.message); //백엔드 개발자가 만든 error 메시지를 보여줌
      }
    }
  };
  const onClickDelete = async () => {
    // let checkPassword = prompt("비밀번호 입력");
    console.log(index);
    try {
      deleteBoardComment({
        variables: {
          boardCommentId: index,
          password: checkPassword,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: { boardId: router.query.number },
          },
        ],
      });
    } catch (error) {
      console.log(error);
      alert(error.message); //백엔드 개발자가 만든 error 메시지를 보여줌
    }
  };
  // 수정
  const ChangeEdit = (event) => {
    setIsEdit((prev) => !prev);
    setCommentId(event.target.id);
  };

  const onClickUpdate = async () => {
    if (!comment && !rate) {
      alert("수정한 내용이 없습니다.");
      return;
    }
    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    const updateBoardCommentInput = {};
    const myComment = {
      boardCommentId: commentId,
      password,
      updateBoardCommentInput,
    };
    if (comment) updateBoardCommentInput.contents = comment;
    if (rate) updateBoardCommentInput.rating = rate;
    const result = await updateBoardComment({
      variables: myComment,
    });
    console.log(result);
    // console.log(props.boardData);
  };
  //삭제 modal
  const showModal = (event) => {
    setIsModalVisible(true);
    console.log(event.target.id);
    setIndex(event.target.id);
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
  return (
    <>
      <BoardCommentUI
        setRate={setRate}
        writer={writer}
        password={password}
        comment={comment}
        character={character}
        commentData={commentData}
        onChangeComment={onChangeComment}
        onChangePassword={onChangePassword}
        onChangeWriter={onChangeWriter}
        onClickSubmit={onClickSubmit}
        onClickDelete={onClickDelete}
        showModal={showModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        onChangeCheckPassword={onChangeCheckPassword}
        isModalVisible={isModalVisible}
        onClickUpdate={onClickUpdate}
        ChangeEdit={ChangeEdit}
        isEdit={isEdit}
      />
    </>
  );
}
