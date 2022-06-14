import LoginUI from "./Login.presenter";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { useRecoilState } from "recoil";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { accessTokenState } from "../../../commons/store";
import { LOGIN_USER } from "./Login.quires";
import { Modal } from "antd";

const schema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

export default function Login() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const [loginUser] = useMutation(LOGIN_USER);
  const router = useRouter();

  const onClickLogin = async (data) => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
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
  };

  const onClickToSignUp = () => {
    router.push(`/users/signup`);
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
      onClickLogin={onClickLogin}
      register={register}
      formState={formState}
      handleSubmit={handleSubmit}
    />
  );
}
