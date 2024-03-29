import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";
import { IBoardWriteProps, IMyVariables } from "./BoardWrite.types";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();

  const [data, setData] = useState({});
  const [callGraphql] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [name, setName] = useState("");
  const [contents, setContents] = useState("");
  const [title, setTitle] = useState("");

  const onClickGraphqlApi = async () => {
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
    setData(result.data.createBoard);
    router.push(`/09-01-boards/${result.data.createBoard.number}`);
  };

  const onClickUpdate = async () => {
    const myVariables: IMyVariables = { number: Number(router.query.number) };
    if (name) myVariables.writer = name;
    if (title) myVariables.title = title;
    if (contents) myVariables.contents = contents;

    const result = await updateBoard({
      variables: myVariables,
    });
    router.push(`/09-01-boards/${result.data.updateBoard.number}`);
    // router.push(`/09-01-boards/${router.query.number}`)
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

  return (
    <BoardWriteUI
      onChangeName={onChangeName}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickGraphqlApi={onClickGraphqlApi}
      onClickUpdate={onClickUpdate}
      data={data}
      boardData={props.boardData}
      isEdit={props.isEdit}
    />
  );
}
