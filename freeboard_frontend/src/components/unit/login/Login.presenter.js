import Button01 from "../../commons/buttons/buttons01";
import Input from "../../commons/inputs/input01";
import * as S from "./Login.styles";
export default function LoginUI(props) {
  return (
    <S.Body>
      <S.Form onSubmit={props.handleSubmit(props.onClickLogin)}>
        <S.Title>로그인</S.Title>
        <Input
          register={props.register("email")}
          type="text"
          placeholder="이메일을 입력해주세요."
        />
        <Input
          register={props.register("password")}
          type="text"
          placeholder="비밀번호를 입력해주세요."
        />
        <S.RowWrapper>
          <S.Check type="checkbox" /> 로그인 상태 유지
        </S.RowWrapper>
        <Button01 isActive={props.formState.isValid} title="로그인"></Button01>
        <S.FunctionArea>
          <S.FindEmail>이메일 찾기</S.FindEmail>
          <S.FindPassword>비밀번호 찾기</S.FindPassword>
          <S.SignUp onClick={props.onClickToSignUp}>회원가입</S.SignUp>
        </S.FunctionArea>
      </S.Form>
    </S.Body>
  );
}
