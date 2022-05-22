import styled from "@emotion/styled";

export const Body = styled.div`
  width: 100%;
  height: 100%;
`;
export const Wrapper = styled.div`
  width: 1200px;
  height: 100%;
  margin: 50px auto;
`;

export const CommentArea = styled.div`
  height: auto;
`;
export const CommentInputWrapper = styled.div`
  width: 100%;
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
export const CommentInputInfo = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
`;
export const Writer = styled.input`
  width: 180px;
  height: 52px;
  padding: 5px 10px;
  margin-right: 40px;
  &::placeholder {
    color: #828282;
  }
`;
export const Password = styled.input`
  width: 180px;
  height: 52px;
  padding: 5px 10px;
  &::placeholder {
    color: #828282;
  }
`;
export const Star = styled.div`
  width: auto;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
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
export const CommentShowArea = styled.div`
  width: 100%;
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
