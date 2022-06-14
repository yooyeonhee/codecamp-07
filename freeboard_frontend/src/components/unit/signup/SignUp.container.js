import SignUpUI from "./SignUp.presenter";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CREATE_USER } from "./SignUp.quires";
import { useRouter } from "next/router";
import { Modal } from "antd";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  name: yup.string().required("이름은 필수 입력 사항입니다."),
  password: yup
    .string()
    .min(4, "비밀번호는 4자리 이상 15자리 이하로 입력해주세요.")
    .max(15, "비밀번호는 4자리 이상 15자리 이하로 입력해주세요.")
    .required("비밀번호는 필수 입력 사항입니다."),
  passwordConfirm: yup
    .string()
    .min(4, "비밀번호는 4자리 이상 15자리 이하로 입력해주세요.")
    .max(15, "비밀번호는 4자리 이상 15자리 이하로 입력해주세요.")
    .required("비밀번호는 필수 입력 사항입니다.")
    .oneOf([yup.ref("password"), null], "비밀번호가 다릅니다."),
});

export default function SignUp() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSignUp = async (data) => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            name: data.name,
            password: data.password,
          },
        },
      });
      Modal.success({
        content: "회원가입을 축하합니다.",
        onOk() {
          router.push(`/users/login`);
        },
      });
    } catch (error) {
      console.log(error);
      alert(error.message); //백엔드 개발자가 만든 error 메시지를 보여줌
    }
  };

  return (
    <SignUpUI
      register={register}
      handleSubmit={handleSubmit}
      onClickSignUp={onClickSignUp}
      formState={formState}
    />
  );
}
