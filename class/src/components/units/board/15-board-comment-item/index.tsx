import styled from "@emotion/styled";
import { useState } from "react";

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function BoardCommentItem(props: any) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit(true);
  };

  return (
    <div>
      {isEdit === false && (
        <MyRow key={props.el._id}>
          <MyColumn>{props.el.writer}</MyColumn>
          <MyColumn>{props.el.title}</MyColumn>
          <button onClick={onClickEdit}>수정하기</button>
        </MyRow>
      )}
      {isEdit === true && <div>수정하기 화면입니다.</div>}
      {/* {index !== myIndex ? (
          <MyRow key={el._id}>
            <MyColumn>{el.writer}</MyColumn>
            <MyColumn>{el.title}</MyColumn>
            <button id={index} onClick={onClickEdit}>
              수정하기
            </button>
          </MyRow>
        ) : (
          <div>수정하기 화면입니다.</div>
        )} */}
    </div>
  );
}
