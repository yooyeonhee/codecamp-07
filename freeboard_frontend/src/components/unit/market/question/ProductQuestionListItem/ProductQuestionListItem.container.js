import ProductQuestionListItemUI from "./ProductQuestionListItem.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  DELETE_USED_ITEM_QUESTIONS,
  FETCH_USED_ITEM_QUESTIONS,
  FETCH_USER_LOGGED_IN,
} from "./ProductQuestionListItem.queries";
import { useState } from "react";

export default function ProductQuestionListFunction(props) {
  const router = useRouter();

  const { data, fetchMore } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: router.query.productId },
  });
  const { data: loginData } = useQuery(FETCH_USER_LOGGED_IN);
  const [deleteQuestion] = useMutation(DELETE_USED_ITEM_QUESTIONS);

  // console.log(loginData?.fetchUserLoggedIn.email);
  // 댓글 삭제 modal & password
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [checkPassword, setCheckPassword] = useState("");
  const [questionId, setQuestionId] = useState("");

  // 댓글 수정
  const [address, setAddress] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const [isAnswer, setIsAnswer] = useState(false);

  const showModal = (event) => {
    setIsModalVisible(true);
    setQuestionId(event.target.id);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    onClickDelete();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // 댓글 삭제 함수
  const onClickDelete = async () => {
    try {
      await deleteQuestion({
        variables: {
          useditemQuestionId: questionId,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: {
              useditemId: router.query.productId,
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
    // console.log(event.target);
    setAddress(event.target.id);
    setIsEdit((prev) => !prev);
  };

  const onClickAnswer = async (event) => {
    // console.log(event.target.id);
    props.setAnswerAddress(event.target.id);
    props.setIsAnswer((prev) => !prev);
  };

  return (
    <ProductQuestionListItemUI
      data={data}
      isModalVisible={isModalVisible}
      onClickUpdate={onClickUpdate}
      address={address}
      setAddress={setAddress}
      isEdit={isEdit}
      setIsEdit={setIsEdit}
      loginData={loginData}
      onClickAnswer={onClickAnswer}
      isAnswer={isAnswer}
      setIsAnswer={setIsAnswer}
      // onClickDeleteIcon={onClickDeleteIcon}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      el={props.el}
    />
  );
}
