// export function withAuth(){
//     return function (){

import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { accessTokenState, isLoadedState } from "../../../commons/store";

//     }
// }

export const withAuth = (Component) => (props) => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [isLoaded, setIsLoaded] = useRecoilState(isLoadedState);
  const router = useRouter();
  useEffect(() => {
    // 1. restoreAccessToken을 두 번 요청
    // if (!accessToken) {
    //   getAccessToken().then((newAccessToken)=>{
    //     if(newAccessToken){
    //       setAccessToken(newAccessToken)
    //     }else{
    //       alert("로그인 후 이용 가능합니다.")
    //     }
    //   })
    // }
    // if (!localStorage.getItem("accessToken")) {
    //   alert("로그인 후 이용 가능합니다.");
    //   router.push("/23-04-login-check");
    // }
  }, []);

  useEffect(() => {
    if (isLoaded && !accessToken) {
      alert("로그인 후 이용 가능합니다.");
    }
  }, [isLoaded]);

  return <Component {...props} />;
};
