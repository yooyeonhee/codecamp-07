import * as S from "./BoardWriteUpload.styles"

export default function BoardWriteUploadUI(props){

    return(
        <>
      {props.fileUrl ? (
        <S.UploadImage onClick={props.onClickUpload} src={`https://storage.googleapis.com/${props.fileUrl}`} />
      ) : (
        <S.UploadButton onClick={props.onClickUpload}>
          <>+</>
          <>Upload</>
        </S.UploadButton>
      )}
      <S.UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
    )

}