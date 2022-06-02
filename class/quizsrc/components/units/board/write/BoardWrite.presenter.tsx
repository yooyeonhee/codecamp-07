import * as S from "./BoardWrite.styles";
export default function BoardWriteUI(props: any) {
  return (
    <S.Wrapper>
      작성자 <S.Writer onChange={props.onChangeWriter}></S.Writer>
      비밀번호{" "}
      <S.Password
        type="password"
        onChange={props.onChangePassword}
      ></S.Password>
      제목 <S.Title type="text" onChange={props.onChangeTitle}></S.Title>
      내용{" "}
      <S.Contents type="text" onChange={props.onChangeContents}></S.Contents>
      <S.Image
        type="file"
        onChange={props.onChangeFile}
        ref={props.fileRef}
        multiple
      ></S.Image>
      <S.ImageShow onClick={props.onClickImage}>+</S.ImageShow>
      <S.SaveButton onClick={props.onClickCreateBoard}>저장하기</S.SaveButton>
      선택된 이미지
      <S.PickImage
        src={`https://storage.googleapis.com/${props.imageUrl}`}
      ></S.PickImage>
    </S.Wrapper>
  );
}
