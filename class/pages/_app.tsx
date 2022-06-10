import "../styles/globals.css";
import { RecoilRoot } from "recoil";

// graphql 환경설정
// {} command+i 입력 목록 뜸
import { AppProps } from "next/app";
import "antd/dist/antd.css";
// import Layout from "../quizsrc/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../quizsrc/commons/styles/globalStyles";
// import { createUploadLink } from "apollo-upload-client";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import ApolloSetting from "../src/components/commons/apollo";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import { createContext } from "react";

// export const GlobalContext = createContext({
//   isEdit: false,
//   setIsEdit: (_: any) => {},
// });

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
  return (
    <RecoilRoot>
      {/* <GlobalContext.Provider
        value={{
          isEdit,
          setIsEdit,
        }}
      > */}
      <ApolloSetting>
        <Global styles={globalStyles} />
        {/* <Layout> */}
        <Component {...pageProps} />
        {/* </Layout> */}
      </ApolloSetting>
      {/* </GlobalContext.Provider> */}
    </RecoilRoot>
  );
}

export default MyApp;
