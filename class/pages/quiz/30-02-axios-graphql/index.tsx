import styled from "@emotion/styled";
import axios from "axios";
import { useState } from "react";

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  margin-left: 20px;
`;

export default function AxiosGraphqlPage() {
  const [arr, setArr] = useState([]);
  const onClickAxios = () => {
    axios
      .post("http://backend07.codebootcamp.co.kr/graphql", {
        query: `query { fetchBoards {title,contents}}`,
      })
      .then((res) => {
        const result = res.data.data.fetchBoards;
        console.log(res.data.data.fetchBoards);
        setArr(result);
      });
  };
  return (
    <>
      <button onClick={onClickAxios}>요청</button>
      {arr.map((el: any) => (
        <MyRow key={el.id}>
          <div>{el.title}</div>
          <MyColumn>{el.contents}</MyColumn>
        </MyRow>
      ))}
    </>
  );
}
