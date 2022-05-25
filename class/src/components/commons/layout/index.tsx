import { useRouter } from "next/router";
import { ReactNode } from "react";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import LayoutSidebar from "./sidebar";

interface ILayoutProps {
  children: ReactNode;
}
const HIDDEN_HEADERS = ["/12-05-modal-refactoring", "/04-01-rest-get"];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  //  console.log(router)
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
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
