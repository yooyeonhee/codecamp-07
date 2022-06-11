import LoginUI from "./Login.presenter";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { LOGIN_USER } from "./Login.quires";
import { Modal } from "antd";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const [loginUser] = useMutation(LOGIN_USER);
  const router = useRouter();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    if (email && password) {
      try {
        const result = await loginUser({
          variables: {
            email,
            password,
          },
        });
        const accessToken = result.data.loginUser.accessToken;
        console.log(accessToken);
        setAccessToken(accessToken);
        localStorage.setItem("accessToken", accessToken);
        success();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onClickToSignUp = () => {
    router.push(`/signup`);
  };

  const success = () => {
    Modal.success({
      content: "로그인에 성공하였습니다.",
      onOk() {
        router.push(`/boards`);
      },
    });
  };
  return (
    <LoginUI
      onClickToSignUp={onClickToSignUp}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
    />
  );
}
