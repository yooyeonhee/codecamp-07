import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuth = (Component) => {
  return (props) => {
    const router = useRouter();
    useEffect(() => {
      if (!localStorage.getItem("accessToken")) {
        alert("로그인 후 이용 가능합니다.");
        router.push("/quiz/23-01-hoc-login");
      }
    }, []);
    return <Component {...props} />;
  };
};
