import { gql, useQuery } from "@apollo/client";
import { withAuth } from "../../../quizsrc/components/commons/hoc/withAuth";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

function mainPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  // const router = useRouter();
  // useEffect(() => {
  //   if (!localStorage.getItem("accessToken")) {
  //     alert("로그인 후 이용 가능합니다.");
  //     router.push("/23/04-login-check");
  //   }
  // }, []);

  return <div>로그인된 유저입니다.</div>;
}
export default withAuth(mainPage);
