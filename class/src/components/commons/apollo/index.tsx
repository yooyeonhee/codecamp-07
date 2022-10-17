import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { areArraysEqual } from "@mui/base";
import { avatarClasses } from "@mui/material";
import { createUploadLink } from "apollo-upload-client";
import { GraphQLClient } from "graphql-request";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { accessTokenState, isLoadedState } from "../../../commons/store";

export default function zApolloSetting(props: any) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  // const [isLoaded, setIsLoaded] = useState();
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
    // 1. 기존방식
    // const accessToken = localStorage.getItem("accessToken");
    // setAccessToken(accessToken || "");
    // getAccessToken().then((newAccessToken) => {
    //   setAccessToken(newAccessToken);
    // });
    // withAuth- 해결방법 1
    // getAccessToken().then((newAccessToken) => {
    //   setAccessToken(newAccessToken);
    // });
    // withAuth- 해결방법 2
    // getAccessToken().then((newAccessToken) => {
    //   setAccessToken(newAccessToken);
    //   setIsLoaded(true);
    // });
    // g
  }, []);

  // const RESTORE_ACCESS_TOKEN = gql`
  //   mutation restoreAccessToken {
  //     restoreAccessToken {
  //       accessToken
  //     }
  //   }
  // `;

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1. 에러를 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰만료 에러인지 체크(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 함수 분리
          // 2-1. refreshToken으로 accessToken을 재발급 받기
          getAccessToken().then((newAccessToken) => {
            // 2-2. 재발급 받은 accessToken 저장하기
            setAccessToken(newAccessToken);

            // 3-1. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기
            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`, // accessToken만 바꿔치기
              },
            });
            // 3-2.변경된 operation 재요청하기.
            return forward(operation);
          });
        }
      }
    }
  });

  //   const [isEdit, setIsEdit] = useState(false);
  // 업로드, 로그인과 같은 복잡한 서비스 구현은 링크를 따로 만들어 연결해줌.
  const uploadLink = createUploadLink({
    uri: "https://backend07.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
