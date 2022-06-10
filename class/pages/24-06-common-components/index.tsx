import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "@emotion/styled";
import ButtonBasic from "../../src/components/commons/buttons/basic";
import InputBasic from "../../src/components/commons/inputs/basic";

const Error = styled.div`
  color: red;
  font-size: 9px;
`;

// 입력 조건 작성
const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    .min(4, "비밀번호는 4자리 이상 15자리 이하로 입력해주세요.")
    .max(15, "비밀번호는 4자리 이상 15자리 이하로 입력해주세요.")
    .required("비밀번호는 필수 입력 사항입니다."),
});

export default function ReactHookFromPage() {
  const { register, handleSubmit, formState } = useForm({
    // react-hook-from과 (yup)입력 조건 연결
    resolver: yupResolver(schema),
    // 조건을 언제 검증할 것인가. ex)입력 중, 버튼을 누를때 등등.
    mode: "onChange",
  });
  const onClickSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      이메일 : <InputBasic register={register("email")} type="text" />
      <Error>{formState.errors.email?.message}</Error>
      비밀번호 : <InputBasic register={register("password")} type="password" />
      <Error>{formState.errors.password?.message}</Error>
      <ButtonBasic title="로그인" isActive={formState.isValid} />
    </form>
  );
}
