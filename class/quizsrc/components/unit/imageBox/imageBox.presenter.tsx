import * as S from "./imageBox.styles";
import UploadBox from "./uploadBox/uploadBox.container";
export default function ImageBoxUI(props: any) {
  return (
    <S.ImageBoxWrapper>
      <S.Label>사진첨부</S.Label>
      {new Array(3).fill(1).map((data, index) => (
        <UploadBox
          key={`${data}_${index}`}
          index={index}
          onChangeFiles={props.onChangeFiles}
          fileUrls={props.fileUrls}
        />
      ))}
    </S.ImageBoxWrapper>
  );
}
