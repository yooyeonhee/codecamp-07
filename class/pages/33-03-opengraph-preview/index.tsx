import axios from "axios";

export default function OpenGraphPreviewPage() {
  const onClickPreview = async () => {
    // CORS를 허가해 준 곳에서만 요청이 가능하다.
    const result = await axios.get("https://www.gmarket.co.kr");
    console.log(result.data);
    console.log(result.data.split("<meta").filter((el) => el.includes("og")));
  };

  return (
    <div>
      <h1>사이트 미리보기 연습!</h1>
      <button onClick={onClickPreview}>미리보기 실행</button>
    </div>
  );
}
