import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../src/commons/store";

// 토큰 만료시간 5초
const LOGIN_USER = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginUserExample] = useMutation(LOGIN_USER);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    const result = await loginUserExample({
      variables: {
        email,
        password,
      },
    });
    const accessToken = result.data.loginUserExample.accessToken;
    console.log(accessToken);
    setAccessToken(accessToken);
    alert("로그인에 성공하였습니다.");
    router.push("/30-02-login-success");
  };

  return (
    <div>
      이메일을 입력하세요 : <input onChange={onChangeEmail} type="text" />
      비밀번호를 입력하세요 :
      <input onChange={onChangePassword} type="password" />
      <button onClick={onClickLogin}>로그인 하기</button>
    </div>
  );
}
