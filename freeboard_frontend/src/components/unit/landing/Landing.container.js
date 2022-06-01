import { useRouter } from "next/router";
import LandingUI from "./Landing.presenter";

export default function Landing() {
  const router = useRouter();
  const onClickGoPage = () => {
    router.push(`/boards`);
  };
  return <LandingUI onClickGoPage={onClickGoPage} />;
}
