import * as S from "./Login.styles";
export default function LoginUI(props) {
  return (
    <S.Body>
      <S.Wrapper>
        <S.Logo>로그인</S.Logo>
        <S.InputItem
          type="text"
          placeholder="이메일을 입력해주세요."
          onChange={props.onChangeEmail}
        ></S.InputItem>
        <S.InputItem
          type="password"
          placeholder="비밀번호를 입력해주세요."
          onChange={props.onChangePassword}
        ></S.InputItem>
        <S.RowWrapper>
          <S.Check type="checkbox" /> 로그인 상태 유지
        </S.RowWrapper>
        <S.LoginButton onClick={props.onClickLogin}>로그인하기</S.LoginButton>
        <S.FunctionArea>
          <S.FindEmail>이메일 찾기</S.FindEmail>
          <S.FindPassword>비밀번호 찾기</S.FindPassword>
          <S.SignUp onClick={props.onClickToSignUp}>회원가입</S.SignUp>
        </S.FunctionArea>
      </S.Wrapper>
    </S.Body>
  );
}
