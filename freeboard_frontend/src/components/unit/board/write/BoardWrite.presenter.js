import { Body, Title, ParentIdDiv, IdInput, TitleInput, IdDiv, ParentDiv, ChildDiv, SubTitle, BoardInput, PostNum, PostInput, SearchPost, UpLoad, Plus, YoutubeInput, PlusIcon, PlusUpload, ChooseDiv, ChooseMain,ChooseLabel, Enroll,ErrorBox} from "./BoardWrite.styles"

export default function BoardWriteUI(props){
    
    return(
        <Body>
            <Title>게시물 등록</Title>
            <ParentIdDiv>
                <IdDiv>
                    <SubTitle aaa="blue">작성자</SubTitle>
                    <IdInput type="text" onChange={props.onChangeName} placeholder="이름을 적어주세요.">
                    </IdInput>
                    <ErrorBox>{props.nameError}</ErrorBox>
                </IdDiv>
                <IdDiv>
                    <SubTitle>비밀번호</SubTitle>
                    <IdInput type="password" onChange={props.onChangePassword} placeholder="비밀번호를 입력해주세요.">
                    </IdInput>
                    <ErrorBox>{props.passwordError}</ErrorBox>
                </IdDiv>
            </ParentIdDiv>
            <ChildDiv>
                <SubTitle>제목</SubTitle>
                <TitleInput type="text" onChange={props.onChangeTitle} placeholder="제목을 작성해주세요.">
                </TitleInput>
                <ErrorBox>{props.titleError}</ErrorBox>
            </ChildDiv>
            <ChildDiv>
                <SubTitle>내용</SubTitle>
                <BoardInput type="text" onChange={props.onChangeContents} placeholder="내용을 작성해주세요.">
                </BoardInput>
                <ErrorBox>{props.contentsError}</ErrorBox>
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
                    <ChooseMain type="radio" name="main"/> <ChooseLabel>유튜브</ChooseLabel>
                    <ChooseMain type="radio" name="main"/> <ChooseLabel>사진</ChooseLabel>
                </ChooseDiv>
            </ChildDiv>
            <Enroll isActive={props.isActive}onClick={props.onClickSubmit}>등록하기</Enroll>

        </Body>
    )
}