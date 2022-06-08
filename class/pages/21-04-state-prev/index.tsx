import { useState } from "react";
export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  function counter() {
    // 1.화살표 함수
    setCount((prev) => prev + 1);

    // 2.함수 선언식
    setCount(function (prev) {
      // 로직 추가 가능
      return prev + 1;
    });
    // 3.매개변수 바꿔보기
    setCount((aaa) => aaa + 1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={counter}>UP COUNT!!</button>
    </div>
  );
}
