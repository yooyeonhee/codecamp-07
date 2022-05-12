import { Body, Title, ParentIdDiv, IdInput, TitleInput, IdDiv, ParentDiv, ChildDiv, SubTitle, BoardInput, PostNum, PostInput, SearchPost, UpLoad, Plus, YoutubeInput, PlusIcon, PlusUpload, ChooseDiv, ChooseMain, Enroll,ErrorBox} from '../../../styles/index';
import { useState } from 'react'


export default function MyPage(){
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const [address, setAddress] = useState("")
    const [nameError, setNameError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [titleError, setTitleError] = useState("")
    const [addressError, setAddressError] = useState("")

    function onChangeName(event){
        //if (event.target.value !==""){
            //setNameError("")
        //}
        // event.targe => 태그 전체를 의미, ex)<input type "text"/>
        // event.target.value => 태그에 입력된 값!!
        setName(event.target.value)
    }
    function onChangePassword(event){
        //if (event.target.value !==""){
            //setNameError("")
        //}
        // event.targe => 태그 전체를 의미, ex)<input type "text"/>
        // event.target.value => 태그에 입력된 값!!
        setPassword(event.target.value)
    }
    function onChangeTitle(event){
        // event.targe => 태그 전체를 의미, ex)<input type "text"/>
        // event.target.value => 태그에 입력된 값!!
        setTitle(event.target.value)
    }
    function onChangeAddress(event){
        // event.targe => 태그 전체를 의미, ex)<input type "text"/>
        // event.target.value => 태그에 입력된 값!!
        setAddress(event.target.value)
    }

    function onClickSubmit(){
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
        if(address === ""){
            setAddressError("상세주소는 필수 입력사항 입니다.")
        }
        else{
            setAddressError("")
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
                <BoardInput type="text" placeholder="내용을 작성해주세요.">
                </BoardInput>
            </ChildDiv>
            <ChildDiv>
                <SubTitle>주소</SubTitle>
                <ParentDiv>
                    <PostNum>07250</PostNum>
                    <SearchPost>우편번호 검색</SearchPost>
                </ParentDiv>
                <PostInput type="text"></PostInput>
                <PostInput type="text" onChange={onChangeAddress} placeholder="상세 주소를 입력해주세요."></PostInput>
                <ErrorBox>{addressError}</ErrorBox>
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