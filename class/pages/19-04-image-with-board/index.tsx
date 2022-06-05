import { ChangeEvent, useRef, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { checkFileValidation } from "../../src/commons/libraries/fileValidation";

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
export default function GraphqlMutationPage() {
  const [callGraphql] = useMutation(CREATE_BOARD);

  const fileRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState();
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const [name, setName] = useState("");
  const [contents, setContents] = useState("");
  const [title, setTitle] = useState("");

  const handleClickGraphqlApi = async () => {
    // rest api 방식
    // const result = await axios.get("https://koreanjson.com/posts/1")
    // graphql api 방식
    const result = await callGraphql({
      variables: {
        createBoardInput: {
          writer: name,
          password: "1234",
          title,
          contents,
          images: [imageUrl],
        },
      },
    });
    console.log(result);
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);

    const isValid = checkFileValidation(file);
    if (!isValid) {
      return;
    }

    try {
      // 1. uploadFile API 요청하기(요청 결과 url 받아오기)
      const result = await uploadFile({
        variables: {
          file,
        },
      });
      // 2. 요청 결과 URL을 state에 저장하기
      setImageUrl(result.data.uploadFile.url);
    } catch (error) {
      Modal.error({ content: "에러발생!!" });
    }
  };
  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <div>
      작성자 : <input type="text" onChange={onChangeName} />
      제목 : <input type="text" onChange={onChangeTitle} />
      내용 : <input type="text" onChange={onChangeContents} />
      <div>
        <h1>이미지 업로드 연습하기</h1>
        <div
          style={{ width: "50px", height: "50px", backgroundColor: "#ccc" }}
          onClick={onClickImage}
        >
          +
        </div>
        <input
          type="file"
          ref={fileRef}
          onChange={onChangeFile}
          multiple
          style={{ display: "none" }}
        />
        <img src={`https://storage.googleapis.com/${imageUrl}`} />
      </div>
      <button onClick={handleClickGraphqlApi}>Rest-Api 요청하기!</button>
    </div>
  );
}
