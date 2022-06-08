import * as S from "./LayoutHeader.styles";
export default function LayoutHeaderUI(props) {
  return (
    <S.Wrapper>
      <S.Logo>Logo</S.Logo>
      <S.NavbarWrapper>
        <S.Navbar>
          <S.NavItem>
            <S.Item onClick={props.onClickToLogin}>LogIn</S.Item>
          </S.NavItem>
          <S.NavItem>
            <S.Item onClick={props.onClickToSignUp}>SignUp</S.Item>
          </S.NavItem>
        </S.Navbar>
      </S.NavbarWrapper>
    </S.Wrapper>
  );
}
