import { useCallback, useMemo, useState } from "react";
import PresenterPage from "./presenter";

export default function ContainerPage() {
  // 변수 선언
  let count = 0;
  const [countState, setCountState] = useState(0);

  // let count가 다시 생성되지 않도록 useMemo를 적용
  // const memo = useMemo(() => {
  //   count += 1;
  //   return count;
  // }, []);

  // 버튼 함수 선언
  const onClickCountLet = useCallback(() => {
    count += 1;
    console.log(count);
  }, []);

  // const onClickCountState = useCallback(() => {
  //   console.log(countState + 1);

  //   // setCountState(countState + 1);
  //   setCountState((prev) => prev + 1);
  // }, []);

  // 위에서 만든 함수를 useMemo를 사용해서 변경
  const onClickCountState = useMemo(
    () => () => {
      setCountState((prev) => prev + 1);
    },
    []
  );
  return (
    <>
      <h1>컨테이너</h1>
      <div>카운트(let) : {count}</div>
      <button onClick={onClickCountLet}>카운트 1증가(let)</button>
      <div>카운트(state) : {countState}</div>
      <button onClick={onClickCountState}>카운트 1증가(state)</button>

      {/* state 변경 함수를 JSX 에서 직접 작성 */}
      {/* <button
        onClick={() => {
          setCountState((prev) => prev + 1);
        }}
      >
        카운트 1증가(state)
      </button> */}
      <PresenterPage />
    </>
  );
}
