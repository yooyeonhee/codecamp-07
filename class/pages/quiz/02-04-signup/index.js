import {useState} from 'react'
export default function signup(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [passwordError2, setPasswordError2] = useState("")

    function onChangeEmail(event){
        // event.targe => 태그 전체를 의미, ex)<input type "text"/>
        // event.target.value => 태그에 입력된 값!!
        setEmail(event.target.value)
    }

    function onChangePassword(event){
        setPassword(event.target.value)

    }

    function onChangePassword2(event){
        setPassword2(event.target.value)

    }
    function onClickSignup(){
        //입력값이 잘 포장되었는지 확인해보기.
        console.log(email)
        console.log(password)
        console.log(password2)
        // console.log(check)

        if(email === ""){
            setEmailError("이메일이 작성되지 않았습니다.")
        }
        else{
            if(email.includes("@") === false){
                setEmailError("이메일이 올바르지 않습니다. (@필요)")
            }
            else{
                setEmailError("")
                // setCheck(Number(check)+1)
            }
        }

        if(password === ""){
            setPasswordError("비밀번호가 입력되지 않았습니다.")
        }
        else{
            setPasswordError("")
        }

        if(password2 === ""){
            setPasswordError2("비밀번호가 입력되지 않았습니다.")
            console.log(password2)
        }
        else{
            setPasswordError2("")
        }

        if(password !== "" && password2!== ""){
            if(password !== password2){
                setPasswordError2("비밀번호가 일치하지 않습니다.")
            }
            else{
                setPasswordError2("")
            }
        }

    }

    return (
        <div>
            이메일: <input type="text" onChange={onChangeEmail} /><br />
            <div>{emailError}</div>
            비밀번호: <input type="password" onChange={onChangePassword} /><br />
            <div>{passwordError}</div>
            비밀번호 확인: <input type="password" onChange={onChangePassword2} /><br />
            <div>{passwordError2}</div>
            <button onClick={onClickSignup}>회원가입</button>
        </div>
    )

}