import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";

export default function ApolloSetting(props: any) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  // const accessToken = localStorage.getItem("accessToken");

  // 1. 프리렌더링 예제 - process.browser 방법
  // if (process.browser) {
  //   console.log("지금은 브라우져다");
  //   localStorage.getItem("accessToken");
  // } else {
  //   console.log("yarn dev 프로그램이다.");
  // }

  // 2. 프리렌더링 예제 - typeof window 방법
  // if (typeof window !== "undefined") {
  //   console.log("지금은 브라우져다");
  //   localStorage.getItem("accessToken");
  // } else {
  //   console.log("yarn dev 프로그램이다.");
  // }

  // 3. 프리렌더링 예제 - useEffect 방법
  // useEffect의 경우 서버에서 그려지지 않기 때문에 무조건 브라우저 영역이라고 생각.
  useEffect(() => {
    // console.log("지금은 브라우져다");
    const accessToken = localStorage.getItem("accessToken");
    setAccessToken(accessToken || "");
  }, []);

  //   const [isEdit, setIsEdit] = useState(false);
  // 업로드, 로그인과 같은 복잡한 서비스 구현은 링크를 따로 만들어 연결해줌.
  const uploadLink = createUploadLink({
    uri: "http://backend07.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
