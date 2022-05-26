// import styled from "@emotion/styled";
import { ReactNode } from "react";
import LayoutBanner from "../../../../quizsrc/components/commons/layout/banner";
import LayoutFooter from "../../../../quizsrc/components/commons/layout/footer";
import LayoutHeader from "../../../../quizsrc/components/commons/layout/header";
import LayoutNavigation from "../../../../quizsrc/components/commons/layout/navigation";
import LayoutSidebar from "../../../../quizsrc/components/commons/layout/sidebar";

interface ILayoutProps {
  children: ReactNode;
}

// const Wrapper = styled.div`
//   height: 100%;
//   width: 100%;
// `;

export default function Layout(props: ILayoutProps) {
  //  console.log(router)
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <div style={{ display: "flex" }}>
        <LayoutSidebar />
        <div>{props.children}</div>
      </div>
      <LayoutFooter />
    </>
  );
}
