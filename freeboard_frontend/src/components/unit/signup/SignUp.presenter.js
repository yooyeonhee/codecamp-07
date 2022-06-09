import * as S from "./SignUp.styles";

export default function SignUpUI(props) {
  return (
    <S.Body>
      <S.BackIcon onClick={props.onClickToLogin} />
      <S.Wrapper>
        <S.Title>회원가입</S.Title>
        <S.InputTitle>이메일</S.InputTitle>
        <S.InputItem
          type="text"
          placeholder="이메일을 입력해주세요."
          onChange={props.onChangeEmail}
        ></S.InputItem>
        <S.ErrorBox>{props.emailError}</S.ErrorBox>
        <S.InputTitle>이름</S.InputTitle>
        <S.InputItem
          type="text"
          placeholder="이름을 입력해주세요."
          onChange={props.onChangeName}
        ></S.InputItem>
        <S.ErrorBox>{props.nameError}</S.ErrorBox>
        <S.InputTitle>비밀번호</S.InputTitle>
        <S.InputItem
          type="password"
          placeholder="비밀번호를 입력해주세요."
          onChange={props.onChangePassword}
        ></S.InputItem>
        <S.ErrorBox>{props.passwordError}</S.ErrorBox>
        <S.InputTitle>비밀번호 확인</S.InputTitle>
        <S.InputItem
          type="password"
          placeholder="비밀번호를 입력해주세요."
          onChange={props.onChangeRePassword}
        ></S.InputItem>
        <S.ErrorBox>{props.rePasswordError}</S.ErrorBox>

        <S.LoginButton onClick={props.onClickSingUp}>
          회원가입하기
        </S.LoginButton>
      </S.Wrapper>
    </S.Body>
  );
}
