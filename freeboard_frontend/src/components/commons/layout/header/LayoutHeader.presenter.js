import * as S from "./LayoutHeader.styles";
export default function LayoutHeaderUI(props) {
  return (
    <S.Wrapper>
      <S.Logo>Logo</S.Logo>
      <S.NavbarWrapper>
        <S.Navbar>
          <S.NavItem>
            <S.Welcome>
              {props.data?.fetchUserLoggedIn
                ? `${props.data?.fetchUserLoggedIn.name}님 안녕하세요.`
                : ""}
            </S.Welcome>

            <S.Item
              onClick={
                props.data?.fetchUserLoggedIn
                  ? props.onClickToLogout
                  : props.onClickToLogin
              }
            >
              {props.data?.fetchUserLoggedIn ? "LogOut" : "LogIn"}
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
