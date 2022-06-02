import "../styles/globals.css";

// graphql 환경설정
// {} command+i 입력 목록 뜸
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { AppProps } from "next/app";
import "antd/dist/antd.css";
// import Layout from "../quizsrc/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../quizsrc/commons/styles/globalStyles";
import { createUploadLink } from "apollo-upload-client";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXRDHne_8ijDJpY6vWUfAKOPhNaLpN2ps",
  authDomain: "my-first-portfolio-5ddf8.firebaseapp.com",
  projectId: "my-first-portfolio-5ddf8",
  storageBucket: "my-first-portfolio-5ddf8.appspot.com",
  messagingSenderId: "698708720889",
  appId: "1:698708720889:web:020e02a8fa04aa95d87628",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  // 업로드, 로그인과 같은 복잡한 서비스 구현은 링크를 따로 만들어 연결해줌.
  const uploadLink = createUploadLink({
    uri: "http://backend07.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });
  return (
    // 모든 화면에 적용되도록 제공되는 기능
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      {/* <Layout> */}
      <Component {...pageProps} />
      {/* </Layout> */}
    </ApolloProvider>
  );
}

export default MyApp;
