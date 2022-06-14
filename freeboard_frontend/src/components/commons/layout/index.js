import styled from "@emotion/styled";
// import {ReactNode} from "react"

import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation/navigation.container";
import LayoutFooter from "./footer";
import LayoutHeader from "./header/LayoutHeader.container";
import { useRouter } from "next/router";
// interface ILayoutProps {
//   children: ReactNode;
// }
const HIDDEN_HEADERS = ["/users/login", "/users/signup", "/"];
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export default function Layout(props) {
  const router = useRouter();
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  //  console.log(router)
  return (
    <>
      {!isHiddenHeader && (
        <>
          <LayoutHeader />
          <LayoutBanner />
          <LayoutNavigation />
        </>
      )}
      <Wrapper>{props.children}</Wrapper>
      {!isHiddenHeader && <LayoutFooter />}
    </>
  );
}
