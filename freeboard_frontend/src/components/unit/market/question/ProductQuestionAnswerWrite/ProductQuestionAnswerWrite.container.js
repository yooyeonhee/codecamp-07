import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import ProductQuestionAnswerWriteUI from "./ProductQuestionAnswerWrite.presenter";
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  FETCH_USED_ITEM_QUESTIONS_ANSWER,
  UPDATE_USED_ITEM_QUESTION_ANSWER,
} from "./ProductQuestionAnswerWrite.queries";

export default function ProductQuestionAnswerWriteFunction(props) {
  const [contents, setContents] = useState("");
  const [count, setCount] = useState(0);
  const router = useRouter();

  const [createQuestionAnswer] = useMutation(CREATE_USED_ITEM_QUESTION_ANSWER);
  const [updateQuestionAnswer] = useMutation(UPDATE_USED_ITEM_QUESTION_ANSWER);

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const onClickSubmit = async () => {
    console.log(props.answerAddress);
    if (contents) {
      try {
        //정보 저장 api 함수
        const result = await createQuestionAnswer({
          variables: {
            createUseditemQuestionAnswerInput: {
              contents,
            },
            useditemQuestionId: props.answerAddress,
          },
          refetchQueries: [
            {
              query: FETCH_USED_ITEM_QUESTIONS_ANSWER,
              variables: {
                useditemQuestionId: props.answerAddress,
              },
            },
          ],
        });
        props.setAnswerAddress("");
      } catch (error) {
        alert(error.message); //백엔드 개발자가 만든 error 메시지를 보여줌
      }
    }
  };

  // const onClickUpdate = async () => {
  //   props.setIsEdit((prev) => !prev);
  //   if (!contents) {
  //     alert("수정한 내용이 없습니다.");
  //     return;
  //   }
  //   // if (contents) updateUseditemQuestionInput.contents = contents;
  //   const result = await updateQuestionAnswer({
  //     variables: {
  //       updateUseditemQuestionInput: {
  //         contents,
  //       },
  //       useditemQuestionId: props.address,
  //     },
  //     refetchQueries: [
  //       {
  //         query: FETCH_USED_ITEM_QUESTIONS,
  //         variables: {
  //           useditemId: router.query.productId,
  //         },
  //       },
  //     ],
  //   });
  //   props.setAddress("");
  // };

  return (
    <ProductQuestionAnswerWriteUI
      onClickSubmit={onClickSubmit}
      // onClickUpdate={onClickUpdate}
      onChangeContents={onChangeContents}
      // isEdit={props.isEdit}
      // el={props.el}
    />
  );
}
