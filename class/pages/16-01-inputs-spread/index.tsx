import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  // const [name, setName] = useState("");
  // const [contents, setContents] = useState("");
  // const [title, setTitle] = useState("");
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [data, setData] = useState("");
  const [callGraphql] = useMutation(CREATE_BOARD);

  const handleClickGraphqlApi = async () => {
    // rest api 방식
    // const result = await axios.get("https://koreanjson.com/posts/1")
    // graphql api 방식
    const result = await callGraphql({
      variables: {
        ...inputs,
        // writer: inputs.writer,
        // title: inputs.title,
        // contents: inputs.contents,
      },
    });
    console.log(result);
    setData(result.data.createBoard.message);
  };

  const onChangeInputs = (event) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <div>
      작성자 : <input type="text" id="writer" onChange={onChangeInputs} />
      제목 : <input type="text" id="title" onChange={onChangeInputs} />
      내용 : <input type="text" id="contents" onChange={onChangeInputs} />
      <div>{data}</div>
      <button onClick={handleClickGraphqlApi}>Rest-Api 요청하기!</button>
    </div>
  );
}
