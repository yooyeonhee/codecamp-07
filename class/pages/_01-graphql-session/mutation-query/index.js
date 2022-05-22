import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

const FETCH_BOARD = gql`
  query {
    fetchBoard(number: 2043) {
      number
      writer
      title
      contents
    }
  }
`;

export default function GraphqlMutationPage() {
  const [createBoard] = useMutation(CREATE_BOARD);
  const { data } = useQuery(FETCH_BOARD);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  console.log(data);

  const handleClickGraphqlApi = async () => {
    // 함수를 만들어서 요청이 날라갈 수 있도록 한다.
    const result = await createBoard({
      variables: {
        writer,
        title,
        contents,
      },
    });
    // console.log(writer, title, contents)
    console.log(result);
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  return (
    <div>
      작성자 : <input type="text" onChange={onChangeWriter} />
      제목 : <input type="text" onChange={onChangeTitle} />
      내용 : <input type="text" onChange={onChangeContents} />
      {/* <div>{data}</div> */}
      <button onClick={handleClickGraphqlApi}>Rest-Api 요청하기!</button>
    </div>
  );
}
