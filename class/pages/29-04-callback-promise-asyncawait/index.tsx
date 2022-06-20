import { AccordionActions } from "@mui/material";
import axios from "axios";
import { resolveReadonlyArrayThunk } from "graphql";
import { reject } from "lodash";
import { resolve } from "node:path/win32";

// `http://numbersapi.com/random?min=1&max=200``http://koreanjson.com/posts/${num}``http://koreanjson.com/posts?userId=${userId}`;

export default function CallbackPromiseAsyncAwaitPage() {
  // callback hell 계속 파고드는 구조. 유지보수에 매우 부적합하다.
  const onClickCallback = () => {
    const aaa = new XMLHttpRequest();
    aaa.open("get", `http://numbersapi.com/random?min=1&max=200`);
    aaa.send();
    aaa.addEventListener("load", (res: any) => {
      const num = res.target.response.split(" ")[0]; // 150 (랜덤숫자)

      const bbb = new XMLHttpRequest();
      bbb.open("get", `http://koreanjson.com/posts/${num}`);
      bbb.send();
      bbb.addEventListener("load", (res: any) => {
        const userId = JSON.parse(res.target.response).UserId;

        const ccc = new XMLHttpRequest();
        ccc.open("get", `http://koreanjson.com/posts?userId=${userId}`);
        ccc.send();
        ccc.addEventListener("load", (res) => {
          console.log(res); // 최종 결과값!!!
        });
      });
    });
  };

  // const myaxios = () => {
  //   return new Promise ((resolve), reject) => {
  //       // 오래걸리는 작업(외부 API 요청 등)

  //       // 성공시
  //       resolve("철수")
  //       // 실패시
  //       reject("에러발생!!")
  //   }
  // }

  const onClickPromise = () => {
    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        const num = res.data.split(" "[0]);
        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        const userId = res.data.UserId;
        return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        console.log("최종 결과값!!");
      });
  };

  const onClickAsyncAwait = async () => {
    const aaa = await axios.get("http://numbersapi.com/random?min=1&max=200");

    const bbb = await axios.get("http://numbersapi.com/random?min=1&max=200");

    const ccc = await axios.get("http://numbersapi.com/random?min=1&max=200");
  };
  return (
    <>
      <button onClick={onClickCallback}>Callback 요청하기!</button>
      <button onClick={onClickPromise}>Promise 요청하기!</button>
      <button onClick={onClickAsyncAwait}>AsyncAwait 요청하기!</button>
    </>
  );
}
