import { useState } from "react";
import { useMutation } from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite() {
  const [data, setData] = useState("");
  const [callGraphql] = useMutation(CREATE_BOARD);
  const [name, setName] = useState("");
  const [contents, setContents] = useState("");
  const [title, setTitle] = useState("");

  const handleClickGraphqlApi = async () => {
    // rest api 방식
    // const result = await axios.get("https://koreanjson.com/posts/1")
    // graphql api 방식
    const result = await callGraphql({
      variables: {
        writer: name,
        title,
        contents,
      },
    });
    console.log(result);
    setData(result.data.createBoard.message);
  };

  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  return (
    <BoardWriteUI
      onChangeName={onChangeName}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      handleClickGraphqlApi={handleClickGraphqlApi}
      data={data}
    />
  );
}
