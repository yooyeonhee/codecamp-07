// export function withAuth(){
//     return function (){

import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { accessTokenState } from "../../../commons/store";

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

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const router = useRouter();
  useEffect(() => {
    getAccessToken().then((newAccessToken) => {
      if (!newAccessToken) {
        info();
      }
      setAccessToken(newAccessToken);
    });
  }, []);

  return <Component {...props} />;
};
