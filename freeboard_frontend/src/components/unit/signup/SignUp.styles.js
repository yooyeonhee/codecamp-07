import { CloseOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Body = styled.div`
  width: 100%;
  height: 100%;
`;

export const BackIcon = styled(CloseOutlined)`
  position: absolute;
  top: 50px;
  right: 70px;
  font-size: 30px;
`;

export const Wrapper = styled.div`
  width: 400px;
  height: 700px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 20px;
`;
export const Title = styled.div`
  width: 100%;
  font-size: 40px;
  text-align: center;
  margin-bottom: 20px;
`;
export const InputTitle = styled.div`
  width: 100%;
`;
export const InputItem = styled.input`
  width: 100%;
  height: 60px;
  margin: 10px 0px;
  border-radius: 10px;
  padding: 5px 10px;
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 60px;
  margin: 30px 0px;
  border-radius: 10px;
`;
