import {
  Body,
  Title,
  ParentIdDiv,
  IdInput,
  TitleInput,
  IdDiv,
  ParentDiv,
  ChildDiv,
  SubTitle,
  BoardInput,
  PostNum,
  PostAutoInput,
  PostInput,
  SearchPost,
  YoutubeInput,
  ChooseDiv,
  ChooseMain,
  ChooseLabel,
  Enroll,
  ErrorBox,
  ImageWrapper,
  InputImages,
} from "./BoardWrite.styles";
import BoardWriteUpload from "./BoardWriteUpload/BoardWriteUpload.container";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function BoardWriteUI(props) {
  return (
    <Body>
      <Title>{props.isEdit ? "수정 페이지" : "등록 페이지"}</Title>
      <ParentIdDiv>
        <IdDiv>
          <SubTitle aaa="black">작성자</SubTitle>
          <IdInput
            type="text"
            onChange={props.onChangeName}
            placeholder="이름을 적어주세요."
            defaultValue={props.boardData?.fetchBoard.writer}
          ></IdInput>
          <ErrorBox>{props.nameError}</ErrorBox>
        </IdDiv>
        <IdDiv>
          <SubTitle>비밀번호</SubTitle>
          <IdInput
            type="password"
            onChange={props.onChangePassword}
            placeholder="비밀번호를 입력해주세요."
          ></IdInput>
          <ErrorBox>{props.passwordError}</ErrorBox>
        </IdDiv>
      </ParentIdDiv>
      <ChildDiv>
        <SubTitle>제목</SubTitle>
        <TitleInput
          type="text"
          onChange={props.onChangeTitle}
          placeholder="제목을 작성해주세요."
          defaultValue={props.boardData?.fetchBoard.title}
        ></TitleInput>
        <ErrorBox>{props.titleError}</ErrorBox>
      </ChildDiv>
      <ChildDiv>
        <SubTitle>내용</SubTitle>
        <BoardInput
          type="text"
          onChange={props.onChangeContents}
          placeholder="내용을 작성해주세요."
          defaultValue={props.boardData?.fetchBoard.contents}
        ></BoardInput>
        <ErrorBox>{props.contentsError}</ErrorBox>
      </ChildDiv>
      <ChildDiv>
        <SubTitle>주소</SubTitle>
        <ParentDiv>
          <PostNum
            readOnly
            value={
              props.zipcode || props.boardData?.fetchBoard.boardAddress?.zipcode
            }
          ></PostNum>
          <SearchPost onClick={props.addressShowModal}>
            우편번호 검색
          </SearchPost>
          {props.isAddressModalVisible && (
            <Modal
              title="주소검색"
              visible={true}
              onOk={props.addressHandleOk}
              onCancel={props.addressHandleCancel}
            >
              <DaumPostcode onComplete={props.addressHandleComplete} />
            </Modal>
          )}
        </ParentDiv>
        <PostAutoInput
          readOnly
          value={
            props.address || props.boardData?.fetchBoard.boardAddress?.address
          }
        ></PostAutoInput>
        <PostInput
          type="text"
          placeholder="상세 주소를 입력해주세요."
          onChange={props.onChangeAddressDetail}
          defaultValue={props.boardData?.fetchBoard.boardAddress?.addressDetail}
        ></PostInput>
      </ChildDiv>
      <ChildDiv>
        <SubTitle>유튜브</SubTitle>
        <YoutubeInput
          onChange={props.onChangeYoutube}
          placeholder="링크를 복사해주세요."
          defaultValue={props.boardData?.fetchBoard.youtubeUrl}
        ></YoutubeInput>
      </ChildDiv>
      <ImageWrapper>
        <SubTitle>사진첨부</SubTitle>
        <InputImages>
          {new Array(3).fill(1).map((data, index) => (
            <BoardWriteUpload
              key={`${data}_${index}`}
              index={index}
              onChangeFiles={props.onChangeFiles}
              fileUrls={props.fileUrls}
            />
          ))}
        </InputImages>
      </ImageWrapper>
      <ChildDiv>
        <SubTitle>메인 설정</SubTitle>
        <ChooseDiv>
          <ChooseMain type="radio" name="main" />{" "}
          <ChooseLabel>유튜브</ChooseLabel>
          <ChooseMain type="radio" name="main" />{" "}
          <ChooseLabel>사진</ChooseLabel>
        </ChooseDiv>
      </ChildDiv>
      <Enroll
        isActive={props.isActive}
        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
      >
        {props.isEdit ? "수정" : "등록"}하기
      </Enroll>
      {props.isEnrollModalVisible && (
        <Modal
          visible={props.isEnrollModalVisible}
          onOk={props.enrollHandleOk}
          onCancel={props.enrollHandleCancel}
        >
          <p>게시글 {props.isEdit ? "수정" : "등록"}에 성공하셨습니다.</p>
        </Modal>
      )}
    </Body>
  );
}
