import { useForm } from "react-hook-form";

export default function ReactHookFromPage() {
  const { register, handleSubmit, formState } = useForm();
  const onClickSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      제목 : <input type="text" {...register("title")} />
      작성자 : <input type="text" {...register("writer")} />
      내용 : <input type="text" {...register("content")} />
      {/* 주소 : <input type="text" {...register("boardAddress.addressDetail")} /> */}
      <button disabled={formState.isSubmitting}>등록하기</button>
    </form>
  );
}
