import "../styles/globals.css";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import "antd/dist/antd.css";
import { createUploadLink } from "apollo-upload-client";
import FreeboardLayout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
function MyApp({ Component, pageProps }) {
  const uploadLink = createUploadLink({
    uri: "http://backend07.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });
  return (
    //모든 화면에 적용되도록 제공되는 기능
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <FreeboardLayout>
        <Component {...pageProps} />
      </FreeboardLayout>
    </ApolloProvider>
  );
}

export default MyApp;
