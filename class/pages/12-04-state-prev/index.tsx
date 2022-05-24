import { useState } from "react";
export default function CounterStatePage() {
  // js안에서는 바르게 동작하지만 화면에 반영되지 않는 문제가 있기 때문에 state를 사용.
  // let count = 10
  // function counter(){
  //     count = count+1
  // }
  const [count, setCount] = useState(0);

  function counter() {
    // 1씩 증가한다. 임시저장소에 들어갔다가 마지막 한번만 반영된다.
    // setCount (count +1);
    // setCount (count +1);
    // setCount (count +1);
    // setCount (count +1);

    // 4씩 증가
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={counter}>UP COUNT!!</button>
    </div>
  );
}
