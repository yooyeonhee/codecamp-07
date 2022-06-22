import styled from "@emotion/styled";
import { Rate } from "antd";

export const CommentWriteArea = styled.div`
  width: 1200px;
  margin: 0px auto;
  position: relative;
`;
export const Icon = styled.img`
  position: absolute;
  top: 10px;
  left: 20px;
`;
export const CommentInputWrapper = styled.div`
  width: 1100px;
  margin: 50px auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const CommentTitle = styled.div`
  width: 100%;
  height: 100px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
export const CommentTitleIcon = styled.img`
  margin-right: 10px;
  margin-left: 10px;
`;
export const CommentInput = styled.div`
  width: 100%;
  height: auto;
`;

export const CommentWrite = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #bdbdbd;
  display: flex;
  flex-direction: column;
`;
export const CommentWriteText = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 20px;
  resize: none;
  border: none;
  border-bottom: 1px solid #f2f2f2;
  &::placeholder {
    color: #bdbdbd;
  }
`;
export const CommentWriteSubmit = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const CommentWriteTextCount = styled.span`
  margin-left: 20px;
  color: #bdbdbd;
`;
export const CommentWriteSubmitButton = styled.button`
  height: 50px;
  width: 90px;
  background-color: black;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: white;
  border: none;
`;
