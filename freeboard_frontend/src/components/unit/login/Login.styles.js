import styled from "@emotion/styled";

export const Body = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Form = styled.form`
  height: auto;
  width: 500px;
  display: flex;
  flex-direction: column;
  margin: 100px auto;
  padding: 20px 30px;
`;
export const Title = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 28px;
  margin-bottom: 20px;
`;
export const InputItem = styled.input`
  width: 100%;
  height: 60px;
  margin: 10px 0px;
  border-radius: 10px;
  padding: 5px 10px;
`;
export const RowWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 16px;
`;
export const Check = styled.input`
  margin: 10px;
`;
export const LoginButton = styled.button`
  width: 100%;
  height: 60px;
  margin: 30px 0px;
  border-radius: 10px;
`;

export const FunctionArea = styled.div`
  width: 100%;
  height: 80px;
  border-top: 1px solid gray;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const FindEmail = styled.button`
  border: none;
  background-color: transparent;
`;
export const FindPassword = styled.button`
  border: none;
  background-color: transparent;
  border-left: 1px solid black;
  border-right: 1px solid black;
  margin: 0px 10px;
  padding: 0px 10px;
`;
export const SignUp = styled.button`
  border: none;
  background-color: transparent;
`;
