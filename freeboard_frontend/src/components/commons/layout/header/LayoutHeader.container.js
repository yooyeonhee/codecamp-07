import LayoutHeaderUI from "./LayoutHeader.presenter";
import { useRouter } from "next/router";

export default function LayoutHeader() {
  const router = useRouter();
  const onClickToLogin = () => {
    router.push(`/users/login`);
  };
  const onClickToSignUp = () => {
    router.push(`/users/signup`);
  };
  return (
    <LayoutHeaderUI
      onClickToLogin={onClickToLogin}
      onClickToSignUp={onClickToSignUp}
    />
  );
}
