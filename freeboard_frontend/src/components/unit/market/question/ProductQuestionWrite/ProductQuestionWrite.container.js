import { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  CREATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
  UPDATE_USED_ITEM_QUESTION,
} from "./ProductQuestionWrite.queries";
import { useRouter } from "next/router";
import ProductQuestionWriteUI from "./ProductQuestionWrite.presenter";

export default function ProductQuestionWriteFunction(props) {
  const [contents, setContents] = useState("");
  const [count, setCount] = useState(0);
  const router = useRouter();

  const [createQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
  const [updateQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);

  const onChangeContents = (event) => {
    setContents(event.target.value);
    setCount(event.target.value.length);
  };

  const onClickSubmit = async () => {
    if (contents) {
      try {
        //정보 저장 api 함수
        const result = await createQuestion({
          variables: {
            createUseditemQuestionInput: {
              contents,
            },
            useditemId: router.query.productId,
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
        alert(error.message); //백엔드 개발자가 만든 error 메시지를 보여줌
      }
    }
  };

  const onClickUpdate = async () => {
    props.setIsEdit((prev) => !prev);
    if (!contents) {
      alert("수정한 내용이 없습니다.");
      return;
    }
    // if (contents) updateUseditemQuestionInput.contents = contents;
    const result = await updateQuestion({
      variables: {
        updateUseditemQuestionInput: {
          contents,
        },
        useditemQuestionId: props.address,
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
    props.setAddress("");
  };

  return (
    <ProductQuestionWriteUI
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onChangeContents={onChangeContents}
      count={count}
      isEdit={props.isEdit}
      el={props.el}
    />
  );
}
