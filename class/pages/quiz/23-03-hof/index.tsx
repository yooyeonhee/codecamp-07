export default function Bbb() {
  const onClickButton = (num: number) => () => {
    console.log(num);
  };

  // const onClickButton = (num) => {
  //     return () => {
  //         console.log(num);
  //     }
  // }
  return <button onClick={onClickButton(123)}>클릭</button>;
}
