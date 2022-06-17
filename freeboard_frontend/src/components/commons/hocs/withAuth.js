// export function withAuth(){
//     return function (){

import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

//     }
// }

export const withAuth = (Component) => (props) => {
  const info = () => {
    Modal.info({
      title: "로그인 후 이용 가능합니다.",
      onOk() {
        router.push("/users/login");
      },
    });
  };
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      info();
    }
  }, []);

  return <Component {...props} />;
};
