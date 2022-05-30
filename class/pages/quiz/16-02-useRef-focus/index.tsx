import { useEffect, useRef, useState } from "react";

export default function useRefFocusPage() {
  const inputPasswordFocus = useRef<HTMLInputElement>(null);
  const [password, setPassword] = useState("");

  const onChangePassword = (event: any) => {
    setPassword(event.target.value);
    console.log(password);
  };

  useEffect(() => {
    inputPasswordFocus.current?.focus();
  });

  return (
    <>
      비밀번호 입력 :{" "}
      <input
        onChange={onChangePassword}
        ref={inputPasswordFocus}
        type="password"
      ></input>
    </>
  );
}
