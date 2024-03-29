import * as S from "./LayoutHeader.styles";
export default function LayoutHeaderUI(props) {
  return (
    <S.Wrapper>
      <S.Logo>Logo</S.Logo>
      <S.NavbarWrapper>
        <S.Navbar>
          <S.NavItem>
            <S.Welcome>
              {props.accessToken
                ? `${props.data?.fetchUserLoggedIn.name}님 안녕하세요.`
                : ""}
            </S.Welcome>

            <S.Item
              onClick={
                props.accessToken ? props.onClickLogout : props.onClickToLogin
              }
            >
              {props.accessToken ? "LogOut" : "LogIn"}
            </S.Item>
          </S.NavItem>
          <S.NavItem>
            <S.Item onClick={props.onClickToSignUp}>SignUp</S.Item>
          </S.NavItem>
        </S.Navbar>
      </S.NavbarWrapper>
    </S.Wrapper>
  );
}
