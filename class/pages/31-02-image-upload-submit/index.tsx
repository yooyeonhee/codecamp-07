import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
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

export default function ImageUploadPreviewPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState<File>();

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [callGraphql] = useMutation(CREATE_BOARD);

  const handleClickGraphqlApi = async () => {
    const resultFile = await uploadFile({
      variables: {
        file,
      },
    });
    const url = resultFile.data.uploadFile.url;
    const result = await callGraphql({
      variables: {
        createBoardInput: {
          writer: "김맹구",
          password: "1234",
          title: "맹구입니다.",
          contents: "저는 김씨가 아니에요.",
          images: [url],
        },
      },
    });
    console.log(result);
  };

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      alert("파일이 없습니다.");
      return;
    }

    // const fileReader = new FileReader();
    // fileReader.readAsDataURL(file);
    // fileReader.onload = (data) => {
    //   if (typeof data.target?.result === "string") {
    //     console.log(data.target?.result); // 미리보기 브라우저에서만 사용하고 버린다. (백엔드 db에 저장하기에는 용량이 크다.)
    //     setImageUrl(data.target?.result);
    //     setFile(file);
    //   }
    // };

    // 임시 미리보기 주소(내 컴퓨터에서만)
    const result = URL.createObjectURL(file);
    console.log(result); // 가짜주소이므로 백엔드에 전송해서는 안된다.
  };

  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} />
      <button onClick={handleClickGraphqlApi}>Rest-Api 요청하기!</button>
    </>
  );
}
