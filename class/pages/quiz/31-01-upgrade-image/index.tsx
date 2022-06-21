import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      images
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
export default function UpgradeImage() {
  const [imageUrl, setImageUrl] = useState("");
  const { register, handleSubmit } = useForm();
  const [file, setFile] = useState();

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      alert("파일이 없습니다.");
      return;
    }
    setFile(file);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        // console.log(data.target?.result);
        setImageUrl(data.target?.result);
      }
    };
    // console.log(imageUrl);
  };

  const onClickSubmit = async (data) => {
    const resultFile = await uploadFile({
      variables: {
        file,
      },
    });
    // console.log(resultFile);
    const url = resultFile.data.uploadFile.url;
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
          images: url,
        },
      },
    });
    console.log(result);
  };

  return (
    <>
      <MyForm onSubmit={handleSubmit(onClickSubmit)}>
        작성자 :<input type="text" {...register("writer")} />
        비밀번호 :<input type="password" {...register("password")} />
        제목 :<input type="text" {...register("title")} />
        내용 : <input type="text" {...register("contents")} />
        이미지 :
        <MyRow>
          <input type="file" onChange={onChangeFile} />
          <img src={imageUrl} />
        </MyRow>
        <button>저장하기</button>
      </MyForm>
    </>
  );
}

const MyRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const MyForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;
