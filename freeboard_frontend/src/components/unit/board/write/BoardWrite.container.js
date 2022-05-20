import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardWriteUI from './BoardWrite.presenter';
import {CREATE_BOARD, UPDATE_BOARD} from './BoardWrite.queries'
import { printIntrospectionSchema } from 'graphql';


export default function BoardWriteFunction(props){
    const router = useRouter()
    // const [data, setData] = useState("")
    const [isActive, setIsActive] = useState(false)
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")
    const [nameError, setNameError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [titleError, setTitleError] = useState("")
    const [contentsError, setContentsError] = useState("")
    const[callGraphql] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)

    const onChangeName = (event) => {
        setName(event.target.value)
        if(event.target.value !==""){
            setNameError("")
        }
        if(event.target.value && password && title && contents){
            setIsActive(true);
        }
        else{
            setIsActive(false)
        }
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)
        if(event.target.value !==""){
            setPasswordError("")
        }
        if(name && event.target.value && title && contents){
            setIsActive(true);
        }
        else{
            setIsActive(false)
        }
    }
    const onChangeTitle = (event) => {
        setTitle(event.target.value)
        if(event.target.value !==""){
            setTitleError("")
        }
        if(name && password && event.target.value && contents){
            setIsActive(true);
        }
        else{
            setIsActive(false)
        }
    }
    const onChangeContents = (event) =>{
        setContents(event.target.value)
        if(event.target.value !==""){
            setContentsError("")
        }
        if(name && password && title &&event.target.value){
            setIsActive(true);
        }
        else{
            setIsActive(false)
        }
    }
    const onClickUpdate = async() => {
        const myVariables = {boardID: router.query.number}
        if(title) myVariables.title = title
        if(contents) myVariables.contents = contents

        const result = await updateBoard({
            variables: myVariables
        })
        router.push(`/boards/${router.query.number}`)
        // router.push(`/08-05-boards/${router.query.number}`)
    }


    const onClickSubmit = async() => {
        //입력사항 오류 메시지 알림
        //거짓 => false , “”,  0,  undefined, null, Not a Number(NaN)
        //참 => true, "~", 0을 제외한 모든 값
        if(!name){
            setNameError("이름을 적어주세요.")
        }
        if(!password){
            setPasswordError("비밀번호를 적어주세요.")
        }
        if(!title){
            setTitleError("제목을 적어주세요.")
        }
        if(!contents){
            setContentsError("내용은 필수 입력사항 입니다.")
        }



        if(name&&password&&title&&contents){
            try{
                //정보 저장 api 함수
                const result = await callGraphql({
                    variables: {
                        createBoardInput: {
                            writer: name,
                            password: password,
                            title: title,
                            contents:contents
                        }
                    }
                })
                console.log(result)

                router.push(`/boards/${result.data.createBoard._id}`)
                // setData(result.data.createBoard._id)
            }
            catch(error){
                console.log(error)
                alert(error.message) //백엔드 개발자가 만든 error 메시지를 보여줌
            }
        }
    }
    return(
        <BoardWriteUI
        isActive = {isActive}
        name= {name}
        password={password}
        title={title}
        contents={contents}
        nameError={nameError}
        passwordError={passwordError}
        titleError={titleError}
        contentsError={contentsError}
        onChangeContents={onChangeContents}
        onChangeTitle={onChangeTitle}
        onChangeName={onChangeName}
        onChangePassword={onChangePassword}
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        isEdit = {props.isEdit}
        boardData = {props.boardData}
        
        />
    )
}