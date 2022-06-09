import SignUpUI from "./SignUp.presenter";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./SignUp.quires";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rePasswordError, setRePasswordError] = useState("");

  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const onChangeRePassword = (event) => {
    setRePassword(event.target.value);
  };
  const onClickToLogin = () => {
    router.push(`/login`);
  };

  const onClickSingUp = async () => {
    if (!email) {
      setEmailError("이메일을 입력해주세요.");
    }
    if (!name) {
      setNameError("이름을 입력해주세요.");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (!rePassword) {
      setRePasswordError("비밀번호를 입력해주세요.");
    }
    if (email && name && password && rePassword) {
      try {
        const result = await createUser({
          variables: {
            createUserInput: {
              email,
              name,
              password,
            },
          },
        });
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <SignUpUI
      onClickToLogin={onClickToLogin}
      onChangeEmail={onChangeEmail}
      onChangeName={onChangeName}
      onChangePassword={onChangePassword}
      onChangeRePassword={onChangeRePassword}
      nameError={nameError}
      passwordError={passwordError}
      emailError={emailError}
      rePasswordError={rePasswordError}
      onClickSingUp={onClickSingUp}
    />
  );
}
