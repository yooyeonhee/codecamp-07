import LoginUI from "./Login.presenter";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const onClickToSignUp = () => {
    router.push(`/signup`);
  };
  return <LoginUI onClickToSignUp={onClickToSignUp} />;
}
