import { useForm } from "react-hook-form";
export default function ReactHookFormPage() {
  const { register, handleSubmit } = useForm();
  const onClickSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자 :<input type="text" {...register("writer")} />
      비밀번호 :<input type="password" {...register("password")} />
      제목 :<input type="text" {...register("title")} />
      내용 : <input type="text" {...register("contents")} />
      <button>등록하기</button>
    </form>
  );
}
