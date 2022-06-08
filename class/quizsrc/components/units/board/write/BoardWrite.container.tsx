import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef, useState } from "react";
import { checkFileValidation } from "../../../../commons/libraries/fileValidation";
import BoardWriteUI from "./BoardWrite.presenter";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function BoardWrite() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [imageUrl, setImageUrl] = useState();

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const fileRef = useRef<HTMLInputElement>(null);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  const onClickCreateBoard = async () => {
    const createData = await createBoard({
      variables: {
        createBoardInput: {
          writer,
          password,
          title,
          contents,
          images: [imageUrl],
        },
      },
    });
    console.log(createData);
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);
    const isValid = checkFileValidation(file);
    if (!isValid) return;
    try {
      const result = await uploadFile({
        variables: {
          file,
        },
      });
      console.log(result);
      setImageUrl(result.data.uploadFile.url);
    } catch (error) {
      Modal.error({ content: "에러!!" });
    }
  };
  const onClickImage = () => {
    fileRef.current?.click();
  };
  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onChangeFile={onChangeFile}
      imageUrl={imageUrl}
      onClickImage={onClickImage}
      fileRef={fileRef}
      onClickCreateBoard={onClickCreateBoard}
    />
  );
}
