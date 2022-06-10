import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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
      작성자 :<input type="text" {...register("writer")} />
      <div>{formState.errors.writer?.message}</div>
      비밀번호 :<input type="password" {...register("password")} />
      <div>{formState.errors.password?.message}</div>
      제목 :<input type="text" {...register("title")} />
      <div>{formState.errors.title?.message}</div>
      내용 : <input type="text" {...register("contents")} />
      <div>{formState.errors.contents?.message}</div>
      <button isActive={formState.isValid}>등록하기</button>
    </form>
  );
}
