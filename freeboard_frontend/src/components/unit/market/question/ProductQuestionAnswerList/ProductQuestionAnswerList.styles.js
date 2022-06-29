import styled from "@emotion/styled";
import { Rate } from "antd";

export const CommentListArea = styled.div`
  width: 100%;
  height: auto;
`;
export const CommentShow = styled.div`
  margin: 50px auto;
  width: 1000px;
  height: auto;
  display: flex;
  flex-direction: column;
`;
export const CommentShowWrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
`;
export const CommentProfileImg = styled.div`
  width: 45px;
  height: 45px;
  margin-right: 15px;
  /* border-radius: 50%; */
`;
export const PersonalImg = styled.img`
  width: 45px;
  height: 45px;
`;
export const CommentShowInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 20px 0px 0px 0px;
`;
export const CommentShowLine1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const CommentShowName = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const CommentShowOption = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ModifyIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
export const DeleteIcon = styled.img`
  width: 20px;
  height: 20px;
`;
export const AnswerIcon = styled.img`
  width: 20x;
  height: 20px;
`;
export const CommentShowLine2 = styled.pre`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4f4f4f;
  margin: 5px 0px 20px 0px;
`;
export const CommentShowLine3 = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #bdbdbd;
`;
