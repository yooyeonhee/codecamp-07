import SignUpUI from "./SignUp.presenter";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SignUp() {
  // const [email, setEmail] = useState("");
  // const [name, setName] = useState("");
  // const [password1, setPassword1] = useState("");
  // const [password2, setPassword2] = useState("");

  // const [emailError, setEmailError] = useState("");
  // const [nameError, setNameError] = useState("");
  // const [passwordError1, setPasswordError1] = useState("");
  // const [passwordError2, setPasswordError2] = useState("");

  const router = useRouter();

  // // 이메일 입력
  // const onChangeEmail = (event) => {
  //   setEmail(event.target.value);
  //   if (event.target.value !== "") {
  //     setEmailError("");
  //   }
  //   if (event.target.value && name && password1 && password2) {
  //     setIsActive(true);
  //   } else {
  //     setIsActive(false);
  //   }
  // };
  // const onChangeName = (event) => {
  //   setName(event.target.value);
  //   if (event.target.value !== "") {
  //     setNameError("");
  //   }
  //   if (name && event.target.value && password1 && password2) {
  //     setIsActive(true);
  //   } else {
  //     setIsActive(false);
  //   }
  // };
  // // 비밀번호 입력
  // const onChangePassword1 = (event) => {
  //   setPassword1(event.target.value);
  //   if (event.target.value !== "") {
  //     setPasswordError1("");
  //   }
  //   if (email && name && event.target.value && password2) {
  //   } else {
  //     setIsActive(false);
  //   }
  // };

  // // 비밀번호 입력
  // const onChangePassword2 = (event) => {
  //   setPassword2(event.target.value);
  //   if (event.target.value !== "") {
  //     setPasswordError2("");
  //   }
  //   if (email && name && password1 && event.target.value) {
  //     setIsActive(true);
  //   } else {
  //     setIsActive(false);
  //   }
  // };

  const onClickToLogin = () => {
    router.push(`/login`);
  };
  return <SignUpUI onClickToLogin={onClickToLogin} />;
}
