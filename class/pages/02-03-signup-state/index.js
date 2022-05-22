import { useState } from "react";

export default function SignupStatePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function onChangeEmail(event) {
    // event.targe => 태그 전체를 의미, ex)<input type "text"/>
    // event.target.value => 태그에 입력된 값!!
    setEmail(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onClickSignup() {
    // 입력값이 잘 포장되었는지 확인해보기.
    console.log(email);
    console.log(password);
    if (email.includes("@") === false) {
      setEmailError("이메일이 올바르지 않습니다. (@필요)");
    } else if (email === false) {
      setEmailError("이메일이 작성되지 않았습니다.");
    } else {
      alert("회원가입을 축하합니다.");
    }

    if (password === false) {
      setPasswordError("비밀번호가 작성되지 않았습니다.");
    } else {
      alert("회원가입을 축하합니다.");
    }
  }

  return (
    <div>
      이메일: <input type="text" onChange={onChangeEmail} />
      <br />
      <div>{emailError}</div>
      비밀번호: <input type="password" onChange={onChangePassword} />
      <br />
      <div>{passwordError}</div>
      <button onClick={onClickSignup}>회원가입</button>
    </div>
  );
}
