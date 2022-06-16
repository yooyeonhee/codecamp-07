// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
// 서버사이드에서는 import 하지 않는다. 다이내믹 임포트 사용.
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function WebEditorPage() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });
  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onClickSubmit = async (data) => {
    console.log(data);

    if (!data.writer || !data.password || !data.title || !data.contents) {
      alert("모두 입력해 주세요.");
      return;
    }
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
      });
      router.push(`/quiz/27-01-editor/detail/${result.data.createBoard._id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자 : <input type="text" {...register("writer")} />
      <br></br>
      비밀번호 : <input type="password" {...register("password")} />
      <br></br>
      제목 :<input type="text" {...register("title")} />
      내용 :<ReactQuill onChange={onChangeContents} />
      <br></br>
      <button>등록하기</button>
    </form>
  );
}
