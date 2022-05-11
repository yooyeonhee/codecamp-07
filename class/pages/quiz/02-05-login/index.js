import {useState} from 'react'
import * as S from '../../../styles/02-04-login'
export default function login(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    function onChangeEmail(event){
        setEmail(event.target.value)
    }
    function onChangePassword(event){
        setPassword(event.target.value)
    }

    function onClickSignup(){
        console.log(email)
        console.log(password)

        if(email === ""){
            setEmailError("이메일을 입력해주세요.")
        }
        else{
            if(email.includes("@") === false){
                setEmailError("이메일 주소를 다시 확인해주세요.")
            }
            else{
                setEmailError("")
            }
        }

        if(password === ""){
            setPasswordError("비밀번호를 입력해주세요.")
        }
        else{
            if(password.length < 8){
                setPasswordError("8~16자의 영문, 숫자, 특수 문자만 사용 가능합니다.")
            }
            else{
                setPasswordError("")
            }
        }

    }
    return(
        <S.Main>
            <S.Wrapper>
                <S.Logo>
                    <img src="/02-road/logo.png"/>
                    <S.Rec src="/02-road/rectangle.png"/>
                    <S.Title>잇츠로드</S.Title>
                </S.Logo>
                <S.InputWrapper>
                    <S.DeleteInput>
                        <S.Input type="text" placeholder='이메일을 입력해 주세요.' onChange={onChangeEmail}/>
                        <img src="/02-road/delete.png" width="20px" height="20px"/>
                    </S.DeleteInput>
                    <S.Error>{emailError}</S.Error>
                    <S.DeleteInput>
                        <S.Input type="password" placeholder='비밀번호를 입력해 주세요.' onChange={onChangePassword}/>
                        <img src="/02-road/delete.png" width="20px" height="20px"/>
                    </S.DeleteInput>
                    <S.Error>{passwordError}</S.Error>
                </S.InputWrapper>
                <S.LoginButton onClick={onClickSignup}>로그인</S.LoginButton>
                <S.FindWrapper>
                    <S.Find>이메일 찾기</S.Find>
                    <S.PwFind>비밀번호 찾기</S.PwFind>
                    <S.Find>회원가입</S.Find>
                </S.FindWrapper>
                <S.KakaoLogin><img src="/02-road/kakao.png" width="30px" height="30px"/><S.ButtonTitle>카카오톡으로 로그인</S.ButtonTitle></S.KakaoLogin>

            </S.Wrapper>
        </S.Main>
    )
}