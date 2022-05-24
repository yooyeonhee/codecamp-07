import BoardCommentUI from "./BoardComment.presenter";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_COMMENT,
  FETCH_COMMENTS,
  DELETE_COMMENT,
} from "./BoardComment.queries";
import { useRouter } from "next/router";

export default function BoardCommentFunction() {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [comment, setComment] = useState("");
  const [character, setCharacter] = useState(0);
  const [rate, setRate] = useState(3);
  const [deleteBoardComment] = useMutation(DELETE_COMMENT);
  const [callGraphql] = useMutation(CREATE_COMMENT);
  const router = useRouter();

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
  const onClickDelete = async (event) => {
    let checkPassword = prompt("비밀번호 입력");
    try {
      deleteBoardComment({
        variables: {
          boardCommentId: commentData.fetchBoardComments[event.target.id]._id,
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

    // console.log(event.target);
    // console.log(commentData.fetchBoardComments[event.target.id]);
  };
  // console.log(data);
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
      />
    </>
  );
}
