import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputBasic from "../../../src/components/commons/inputs/basic";
import ButtonBasic from "../../../src/components/commons/buttons/basic";
import styled from "@emotion/styled";

const Error = styled.div`
  color: red;
  font-size: 9px;
`;

const schema = yup.object({
  writer: yup
    .string()
    .max(15, "15자 이하로 입력해주세요.")
    .required("필수 입력 사항입니다."),
  password: yup
    .string()
    .min(4, "비밀번호는 4자리 이상 15자리 이하로 입력해주세요.")
    .max(15, "비밀번호는 4자리 이상 15자리 이하로 입력해주세요.")
    .required("필수 입력 사항입니다."),
  title: yup.string().required("필수 입력 사항입니다."),
  contents: yup.string().required("필수 입력 사항입니다."),
});

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onClickSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자 :<InputBasic type="text" register={register("writer")} />
      <Error>{formState.errors.writer?.message}</Error>
      비밀번호 :<InputBasic type="password" register={register("password")} />
      <Error>{formState.errors.password?.message}</Error>
      제목 :<InputBasic type="text" register={register("title")} />
      <Error>{formState.errors.title?.message}</Error>
      내용 : <InputBasic type="text" register={register("contents")} />
      <Error>{formState.errors.contents?.message}</Error>
      <ButtonBasic title="등록하기" isActive={formState.isValid}></ButtonBasic>
    </form>
  );
}
