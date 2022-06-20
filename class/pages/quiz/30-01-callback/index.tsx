import styled from "@emotion/styled";
import { cardContentClasses } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  margin-left: 20px;
`;

export default function CallbackPage() {
  const [result, setResult] = useState([]);
  const [list, setList] = useState(false);
  const onClickCallback = () => {
    const aaa = new XMLHttpRequest();
    aaa.open("get", `http://numbersapi.com/random?min=1&max=200`);
    aaa.send();
    aaa.addEventListener("load", (res: any) => {
      const num = res.target.response.split(" ")[0];
      console.log(`HttpRequest: ${num}`);

      const bbb = new XMLHttpRequest();
      bbb.open("get", `http://koreanjson.com/posts/${num}`);
      bbb.send();
      bbb.addEventListener("load", (res: any) => {
        const userId = JSON.parse(res.target.response).UserId;
        console.log(`HttpRequest: ${userId}`);

        const ccc = new XMLHttpRequest();
        ccc.open("get", `http://koreanjson.com/posts?userId=${userId}`);
        ccc.send();
        ccc.addEventListener("load", (res) => {
          console.log(JSON.parse(res.target.response));
        });
      });
    });
  };
  const onClickPromise = () => {
    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        const num = res.data.split(" ")[0];
        console.log(`promise: ${num}`);
        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        const userId = res.data.UserId;
        console.log(`promise: ${userId}`);
        return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        console.log(res.data);
      });
  };
  const onClickAsyncAwait = async () => {
    const aaa = await axios.get("http://numbersapi.com/random?min=1&max=200");
    const num = aaa.data.split(" ")[0];
    console.log(`AsyncAwait: ${num}`);

    const bbb = await axios.get(`http://koreanjson.com/posts/${num}`);
    const userId = bbb.data.UserId;
    console.log(`AsyncAwait: ${userId}`);

    const ccc = await axios.get(`http://koreanjson.com/posts?userId=${userId}`);
    console.log(ccc.data);
    setResult(ccc.data);
    return ccc.data;
  };
  const ShowList = () => {
    setList(onClickAsyncAwait());
  };
  console.log(result);

  return (
    <>
      결과 : <button onClick={onClickCallback}>CallBack</button>
      결과 : <button onClick={onClickPromise}>Promise</button>
      결과 : <button onClick={onClickAsyncAwait}>Async/Await</button>
      <button onClick={ShowList}>목록보기</button>
      {result.map((el: any) => (
        <MyRow key={el.id}>
          <div>{el.id}</div>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
    </>
  );
}
