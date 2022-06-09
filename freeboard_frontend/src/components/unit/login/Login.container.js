import LoginUI from "./Login.presenter";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const onChangeEmail = (event) => {
    setEmail = event.target.value;
  };
  const onChangePassword = (event) => {
    setEmail = event.target.value;
  };

  const onClickToSignUp = () => {
    router.push(`/signup`);
  };
  return (
    <LoginUI
      onClickToSignUp={onClickToSignUp}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
    />
  );
}
