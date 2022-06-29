import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  DELETE_USED_ITEM_QUESTIONS_ANSWER,
  FETCH_USED_ITEM_QUESTIONS_ANSWER,
  FETCH_USER_LOGGED_IN,
} from "./ProductQuestionAnswerList.queries";
import { useState } from "react";
import ProductQuestionAnswerListUI from "./ProductQuestionAnswerList.presenter";

export default function ProductQuestionAnswerListFunction(props) {
  const router = useRouter();

  const { data, fetchMore } = useQuery(FETCH_USED_ITEM_QUESTIONS_ANSWER, {
    variables: { useditemQuestionId: props.addressId },
  });
  const { data: loginData } = useQuery(FETCH_USER_LOGGED_IN);
  const [deleteQuestionAnswer] = useMutation(DELETE_USED_ITEM_QUESTIONS_ANSWER);

  // 댓글 수정
  const [address, setAddress] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  // 댓글 삭제 함수
  const onClickDelete = async (event) => {
    let answerId = event.target.id;
    console.log(answerId);
    try {
      await deleteQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: answerId,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS_ANSWER,
            variables: {
              useditemQuestionId: props.addressId,
            },
          },
        ],
      });
    } catch (error) {
      console.log(error);
      alert(error.message); //백엔드 개발자가 만든 error 메시지를 보여줌
    }
  };

  //  댓글 수정 함수
  const onClickUpdate = async (event) => {
    setAddress(event.target.id);
    setIsEdit((prev) => !prev);
  };

  return (
    <ProductQuestionAnswerListUI
      data={data}
      onClickDelete={onClickDelete}
      onClickUpdate={onClickUpdate}
      address={address}
      setAddress={setAddress}
      isEdit={isEdit}
      setIsEdit={setIsEdit}
      loginData={loginData}
    />
  );
}
