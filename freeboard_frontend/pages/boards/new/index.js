import { Body, Title, ParentIdDiv, IdInput, TitleInput, IdDiv, ParentDiv, ChildDiv, SubTitle, BoardInput, PostNum, PostInput, SearchPost, UpLoad, Plus, YoutubeInput, PlusIcon, PlusUpload, ChooseDiv, ChooseMain, Enroll,ErrorBox} from '../../../styles/emotion';
import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'

const CREATE_BOARD = gql
`
mutation createBoard($createBoardInput:CreateBoardInput!){
    createBoard(createBoardInput:$createBoardInput)
  {
    _id
    title
    contents
  }
}
`

export default function MyPage(){
    const [data, setData] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")
    const [nameError, setNameError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [titleError, setTitleError] = useState("")
    const [contentsError, setContentsError] = useState("")
    const[callGraphql] = useMutation(CREATE_BOARD)

    function onChangeName(event){
        setName(event.target.value)
    }
    function onChangePassword(event){
        setPassword(event.target.value)
    }
    function onChangeTitle(event){
        setTitle(event.target.value)
    }
    function onChangeContents(event){
        setContents(event.target.value)
    }
    //정보 저장 api 함수
    const onClickGraphqlApi = async() => {
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
        setData(result.data.createBoard._id)
    }

    function onClickSubmit(){
        //입력사항 오류 메시지 알림
        if(name === ""){
            setNameError("이름을 적어주세요.")
        }
        else{
            setNameError("")
        }
        if(password === ""){
            setPasswordError("비밀번호를 적어주세요.")
        }
        else{
            setPasswordError("")
        }
        if(title === ""){
            setTitleError("제목을 적어주세요.")
        }
        else{
            setTitleError("")
        }
        if(contents === ""){
            setContentsError("내용은 필수 입력사항 입니다.")
        }
        else{
            setContentsError("")
        }
        if(name!==""&&password!==""&&title!==""&&contents!==""){
            onClickGraphqlApi()
            alert("게시물이 저장되었습니다.")
        }
        
    }
    return(
        <Body>
            <Title>게시물 등록</Title>
            <ParentIdDiv>
                <IdDiv>
                    <SubTitle>작성자</SubTitle>
                    <IdInput type="text" onChange={onChangeName} placeholder="이름을 적어주세요.">
                    </IdInput>
                    <ErrorBox>{nameError}</ErrorBox>
                </IdDiv>
                <IdDiv>
                    <SubTitle>비밀번호</SubTitle>
                    <IdInput type="password" onChange={onChangePassword} placeholder="비밀번호를 입력해주세요.">
                    </IdInput>
                    <ErrorBox>{passwordError}</ErrorBox>
                </IdDiv>
            </ParentIdDiv>
            <ChildDiv>
                <SubTitle>제목</SubTitle>
                <TitleInput type="text" onChange={onChangeTitle} placeholder="제목을 작성해주세요.">
                </TitleInput>
                <ErrorBox>{titleError}</ErrorBox>
            </ChildDiv>
            <ChildDiv>
                <SubTitle>내용</SubTitle>
                <BoardInput type="text" onChange={onChangeContents} placeholder="내용을 작성해주세요.">
                </BoardInput>
                <ErrorBox>{contentsError}</ErrorBox>
            </ChildDiv>
            <ChildDiv>
                <SubTitle>주소</SubTitle>
                <ParentDiv>
                    <PostNum>07250</PostNum>
                    <SearchPost>우편번호 검색</SearchPost>
                </ParentDiv>
                <PostInput type="text"></PostInput>
                <PostInput type="text" placeholder="상세 주소를 입력해주세요."></PostInput>
            </ChildDiv>
            <ChildDiv>
                <SubTitle>유튜브</SubTitle>
                <YoutubeInput placeholder="링크를 복사해주세요."></YoutubeInput>
            </ChildDiv>
            <ChildDiv>
                <SubTitle>사진 첨부</SubTitle>
                <UpLoad>
                    <Plus>
                        <PlusIcon>+</PlusIcon>
                        <PlusUpload>Upload</PlusUpload>
                    </Plus>
                    <Plus>
                        <PlusIcon>+</PlusIcon>
                        <PlusUpload>Upload</PlusUpload>
                    </Plus>
                    <Plus>
                        <PlusIcon>+</PlusIcon>
                        <PlusUpload>Upload</PlusUpload>
                    </Plus>
                </UpLoad>
            </ChildDiv>
            <ChildDiv>
                <SubTitle>메인 설정</SubTitle>
                <ChooseDiv>
                    <ChooseMain type="radio" name="main"/> 유튜브
                    <ChooseMain type="radio" name="main"/> 사진
                </ChooseDiv>
            </ChildDiv>
            <Enroll onClick={onClickSubmit}>등록하기</Enroll>

        </Body>
    )
}