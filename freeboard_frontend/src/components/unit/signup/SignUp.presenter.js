import Button01 from "../../commons/buttons/buttons01";
import Input from "../../commons/inputs/input01";
import * as S from "./SignUp.styles";

export default function SignUpUI(props) {
  return (
    <S.Body>
      <S.Form onSubmit={props.handleSubmit(props.onClickSignUp)}>
        <S.Title>회원가입</S.Title>
        <S.InputTitle>이메일</S.InputTitle>
        <Input
          register={props.register("email")}
          type="text"
          placeholder="이메일을 입력해주세요."
        />
        <S.Error>{props.formState.errors.email?.message}</S.Error>
        <S.InputTitle>이름</S.InputTitle>
        <Input
          type="text"
          register={props.register("name")}
          placeholder="이름을 입력해주세요."
        />
        <S.Error>{props.formState.errors.name?.message}</S.Error>
        <S.InputTitle>비밀번호</S.InputTitle>
        <Input
          type="password"
          register={props.register("password")}
          placeholder="비밀번호를 입력해주세요."
        />
        <S.Error>{props.formState.errors.password?.message}</S.Error>
        <S.InputTitle>비밀번호 확인</S.InputTitle>
        <Input
          type="password"
          register={props.register("passwordConfirm")}
          placeholder="비밀번호를 다시 입력해주세요."
        />
        <S.Error>{props.formState.errors.passwordConfirm?.message}</S.Error>
        <Button01
          isActive={props.formState.isValid}
          title="회원가입"
        ></Button01>
      </S.Form>
    </S.Body>
  );
}
