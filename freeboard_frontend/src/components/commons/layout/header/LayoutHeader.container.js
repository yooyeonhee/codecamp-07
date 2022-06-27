import LayoutHeaderUI from "./LayoutHeader.presenter";
import { useRouter } from "next/router";
import { gql, useMutation, useQuery } from "@apollo/client";
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
const LOG_OUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export default function LayoutHeader() {
  const router = useRouter();
  const [loginState, setLoginState] = useState(false);
  const [logoutUser] = useMutation(LOG_OUT_USER);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  // useEffect(() => {
  //   if (accessToken) {
  //     setLoginState(true);
  //   } else {
  //     setLoginState(false);
  //   }
  // }, []);

  const onClickToLogin = () => {
    router.push(`/users/login`);
  };

  const onClickToSignUp = () => {
    router.push(`/users/signup`);
  };
  const onClickLogout = async () => {
    try {
      const result = await logoutUser();
      router.push(`/users/login`);
      console.log(result);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <LayoutHeaderUI
      onClickToLogin={onClickToLogin}
      onClickToSignUp={onClickToSignUp}
      onClickLogout={onClickLogout}
      data={data}
      accessToken={accessToken}
      // loginState={loginState}
    />
  );
}
