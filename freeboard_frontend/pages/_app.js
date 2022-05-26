import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "antd/dist/antd.css";
import FreeboardLayout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://backend07.codebootcamp.co.kr/graphql",
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
