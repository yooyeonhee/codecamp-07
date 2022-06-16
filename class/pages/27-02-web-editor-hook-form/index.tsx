// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
// 서버사이드에서는 import 하지 않는다. 다이내믹 임포트 사용.
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WebEditorPage() {
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });
  const onChangeContents = (value: string) => {
    console.log(value);

    // register로 등록하지 않고 강제로 값을 넣어주는 기능
    setValue("contents", value === "<p><br></p>" ? "" : value);

    // onchange 됐다고 react-hook-form에 알려주는 기능
    trigger("contents");
  };

  return (
    <div>
      작성자 : <input type="text" {...register("writer")} />
      <br></br>
      비밀번호 : <input type="text" {...register("password")} />
      <br></br>
      제목 :<input type="text" {...register("contetnts")} />
      내용 :<ReactQuill onChange={onChangeContents} />
      <br></br>
      <button>등록하기</button>
    </div>
  );
}
