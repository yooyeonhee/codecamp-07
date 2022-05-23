import { useState } from "react";
import { useMutation } from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite() {
  const [isActive, setIsActive] = useState(false);
  const [data, setData] = useState("");
  const [callGraphql] = useMutation(CREATE_BOARD);
  const [name, setName] = useState("");
  const [contents, setContents] = useState("");
  const [title, setTitle] = useState("");

  const onChangeName = (event) => {
    setName(event.target.value);
    if (event.target.value && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (name && event.target.value && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (name && title && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

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

  // const checkInput = () => {
  //     if(name&&title&&contents){
  //         setIsActive(true)
  //     }
  //     else{
  //         setIsActive(false)
  //     }
  //     console.log(isActive)

  // }

  return (
    <BoardWriteUI
      // checkInput= {checkInput}
      onChangeName={onChangeName}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      handleClickGraphqlApi={handleClickGraphqlApi}
      data={data}
      isActive={isActive}
    />
  );
}
