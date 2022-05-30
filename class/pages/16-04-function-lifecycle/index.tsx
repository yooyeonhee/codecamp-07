import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function CounterPage() {
  const [count, setCount] = useState(99);
  const router = useRouter();

  useEffect(() => {
    console.log("마운트됨!!!");
    // 포커스 깜빡깜빡
  }, []);
  // []->의존성 배열 dependency array
  // useEffect가 무조건 실행되고 만약 []가 변경이 되면 그 useEffect가 한번 더 실행이 된다.
  // [] 비어있으면 useEffect가 1번 실행 후 그 후에는 실행이 안된다. = componentDidMount

  useEffect(() => {
    console.log("수정되고 다시그려짐!!!");
  }); // (처음제외/수정되면) state가 뭐든 상관없이 매번 다시 실행됨, =componentDidUpdate

  useEffect(() => {
    return () => {
      console.log("컴포넌트 사라짐!!!");
      // 채팅방 나갈때 채팅방 접속하는 모든 사람들(모든 브라우저)에게 총 인원의 변화가 보여야함
      // api 요청!!!
    };
  }, []); // =componentWillUnmount

  // 1. 하나로 합치기 기능 (componentDidMount 와 componentWillUnmount)
  useEffect(() => {
    // componentDidMount 때 여기가 실행됨
    return () => {
      // componentWillUnmount때 여기가 실행됨
    };
  }, []);

  // 2. useEffect의 잘못된 사용 예제 (1.추가렌더링 2.[count] 무한루프 )
  useEffect(() => {
    setCount((prev) => prev + 1);
  }, [count]);

  const onClickCounter = () => {
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    router.push("/");
  };

  return (
    <div>
      <div>현재카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 올리기!!!</button>
      <button onClick={onClickMove}>나가기!!!</button>
    </div>
  );
}
