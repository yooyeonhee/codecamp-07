import { useRouter } from "next/router";
import Link from "next/link";

export default function KakaoMapRoutingPage() {
  const router = useRouter();

  const onClickMoveToMap = () => {
    router.push("/29-03-kakao-map-routed");
  };
  return (
    <>
      {/* 시멘틱 태그 사용을 지양한다. */}
      {/* <h1>물건 팝니다.</h1>
    <div>정말 좋은 마우스에요</div> */}
      {/* <button onClick={onClickMoveToMap}>맵으로 이동하기!!</button> */}
      <Link href="/29-03-kakao-map-routed">
        <a>맵으로 이동하기</a>
      </Link>
      {/* <a href="/29-03-kakao-map-routed">맵으로 이동하기</a> */}
    </>
  );
}
