import { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  CREATE_COMMENT,
  FETCH_COMMENTS,
  UPDATE_COMMENT,
} from "./BoardCommentWrite.queries";
import { useRouter } from "next/router";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";

export default function BoardCommentWriteFunction(props) {
  // 입력 변수
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [count, setCount] = useState(0);
  const [rate, setRate] = useState(0);

  // 댓글 생성, 조회 API
  const [callGraphql] = useMutation(CREATE_COMMENT);
  const router = useRouter();

  const [updateBoardComment] = useMutation(UPDATE_COMMENT);

  // 입력 감지 함수
  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event) => {
    console.log(props.isEdit);
    setPassword(event.target.value);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
    setCount(event.target.value.length);
  };
  // 댓글 등록 함수
  const onClickSubmit = async () => {
    console.log(props.isEdit);
    if (writer && password && contents) {
      try {
        //정보 저장 api 함수
        const result = await callGraphql({
          variables: {
            createBoardCommentInput: {
              writer,
              password,
              contents,
              rating: rate,
            },
            boardId: router.query.number,
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
        console.log(result);
      } catch (error) {
        alert(error.message); //백엔드 개발자가 만든 error 메시지를 보여줌
      }
    }
  };

  //댓글 수정 함수
  const onClickUpdate = async () => {
    props.setIsEdit((prev) => !prev);
    console.log("update");
    if (!contents && !rate) {
      alert("수정한 내용이 없습니다.");
      return;
    }
    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    const updateBoardCommentInput = {};
    const myComment = {
      boardCommentId: props.address,
      password,
      updateBoardCommentInput,
    };
    if (contents) updateBoardCommentInput.contents = contents;
    if (rate) updateBoardCommentInput.rating = rate;
    const result = await updateBoardComment({
      variables: myComment,
      refetchQueries: [
        {
          query: FETCH_COMMENTS,
          variables: {
            boardId: router.query.number,
          },
        },
      ],
    });
    props.setAddress("");
    console.log(result);
    // console.log(props.boardData);
  };

  return (
    <BoardCommentWriteUI
      writer={writer}
      password={password}
      contents={contents}
      count={count}
      setRate={setRate}
      onChangeContents={onChangeContents}
      onChangePassword={onChangePassword}
      onChangeWriter={onChangeWriter}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
    />
  );
}
