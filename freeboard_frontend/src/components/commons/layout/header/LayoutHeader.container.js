import LayoutHeaderUI from "./LayoutHeader.presenter";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;
export default function LayoutHeader() {
  const router = useRouter();
  const [loginState, setLoginState] = useState(false);

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  useEffect(() => {
    if (accessToken) {
      setLoginState(true);
    } else {
      setLoginState(false);
    }
  }, []);

  const onClickToLogin = () => {
    router.push(`/users/login`);
  };
  const onClickToLogout = () => {
    console.log("logout");
  };

  const onClickToSignUp = () => {
    router.push(`/users/signup`);
  };
  return (
    <LayoutHeaderUI
      onClickToLogin={onClickToLogin}
      onClickToSignUp={onClickToSignUp}
      onClickToLogout={onClickToLogout}
      data={data}
      loginState={loginState}
    />
  );
}
