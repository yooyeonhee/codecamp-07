import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      number
      message
    }
  }
`;
export default function graphqlApi() {
  const [data, setData] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [callGraphql] = useMutation(CREATE_BOARD);

  const handleClickGraphqlApi = async () => {
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
    <div>
      작성자 : <input type="text" onChange={onChangeName}></input>
      제목 : <input type="text" onChange={onChangeTitle}></input>
      내용 : <input type="text" onChange={onChangeContents}></input>
      <div>{data}</div>
      <button onClick={handleClickGraphqlApi}>GRAPHQL-API 요청하기</button>
    </div>
  );
}
