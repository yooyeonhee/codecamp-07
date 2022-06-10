import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/store";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginSuccessPage() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  useEffect(() => {
    console.log(accessToken);
    if (!accessToken) {
      alert("로그인을 먼저 해주세요.");
    }
  }, []);

  return <div>{data?.fetchUserLoggedIn.name}님 안녕하세요.</div>;
}
