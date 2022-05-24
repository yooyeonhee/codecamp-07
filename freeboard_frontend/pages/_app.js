import "../styles/globals.css";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "antd/dist/antd.css";
function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://backend07.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });
  return (
    //모든 화면에 적용되도록 제공되는 기능
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
