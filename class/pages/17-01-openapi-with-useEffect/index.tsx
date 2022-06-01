import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenApiWithUseEffectPage() {
  const [dogUrl, setDogUrl] = useState("");

  // componentDidMount
  // 처음 한번 실행되고 의존성 배열에 변화가 있을 때만 실행
  // 비어있는 경우 처음 한번 실행되고 그 후로 실행되지 않는다.
  // 오래된 방식 -> 최근에는 react-query를 이용해 작성한다.
  useEffect(() => {
    // 의존성 배열에서는 async 사용 불가 따라서 안에 나만의 함수를 하나 만들어 준다.
    const fetchDog = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogUrl(result.data.message);
    };
    fetchDog();
  }, []);

  return (
    <div>
      <h1>오픈API 연습!!</h1>
      <img src={dogUrl} />
    </div>
  );
}
