export default function EventLoopPage() {
  const onClickTimer = () => {
    // console.log("--------시작--------");
    setTimeout(() => {
      console.log("1초 뒤에 실행될 거에요.");
    }, 0);

    let sum = 0;
    for (let i = 0; i <= 90000000; i += 1) {
      sum++;
    }
    // console.log("--------종료=--------");
  };
  return <button onClick={onClickTimer}>setTimeout 실행시키기</button>;
}
