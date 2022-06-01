import LayoutNavigationUI from "./navigation.presenter";
import { useRouter } from "next/router";
export default function LayoutNavigation() {
  const router = useRouter();

  const onClickMenu = (event) => {
    router.push(event.target.id);
  };
  return <LayoutNavigationUI onClickMenu={onClickMenu} />;
}
