// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
// 서버사이드에서는 import 하지 않는다. 다이내믹 임포트 사용.
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WebEditorPage() {
  const onChangeContents = (value: string) => {
    console.log(value);
  };

  return (
    <div>
      작성자 : <input type="text" />
      <br></br>
      비밀번호 : <input type="password" />
      <br></br>
      제목 :<input type="text" />
      <br></br>
      내용 :<ReactQuill onChange={onChangeContents} />
      <br></br>
      <button>등록하기</button>
    </div>
  );
}
