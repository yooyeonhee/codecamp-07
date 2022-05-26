// import styled from "@emotion/styled";
// import {ReactNode} from "react"
import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import LayoutFooter from "./footer";
// interface ILayoutProps {
//   children: ReactNode;
// }

// const Wrapper = styled.div`
//   height: 100%;
//   width: 100%;
// `;

export default function FreeboardLayout(props) {
  //  console.log(router)
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <div>{props.children}</div>
      <LayoutFooter />
    </>
  );
}
