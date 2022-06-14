import * as S from "./ProductWrite.styles";
import ProductWriteUpload from "./ProductWriteUpload/ProductWriteUpload.container";
export default function ProductWriteUI(props) {
  return (
    <S.Body>
      <S.Wrapper>
        <S.Title>상품 등록하기</S.Title>
        <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
          <S.InputTitle>상품명</S.InputTitle>
          <S.Input type="text" {...props.register("name")} />
          <S.InputTitle>한줄요약</S.InputTitle>
          <S.Input type="text" {...props.register("remarks")} />
          <S.InputTitle>상품설명</S.InputTitle>
          <S.Input type="text" {...props.register("contents")} />
          <S.InputTitle>판매가격</S.InputTitle>
          <S.Input type="number" {...props.register("price")} />
          {/* <S.InputTitle>태그입력</S.InputTitle> */}
          {/* <S.Input type="text" register={props.register("tags")} /> */}
          <S.MyRow>
            <S.MyColum>
              <S.InputTitle>거래위치</S.InputTitle>
              <S.Map></S.Map>
            </S.MyColum>
            <S.MyColum>
              <S.InputTitle>GPS</S.InputTitle>
              <S.MyRow>
                <S.GPSItem>위도(LAT)</S.GPSItem>
                <S.GPSItem>경도(LNG)</S.GPSItem>
              </S.MyRow>
              <S.InputTitle>주소</S.InputTitle>
              <S.Input type="text" />
              <S.Input type="text" />
            </S.MyColum>
          </S.MyRow>
          <S.InputTitle>사진 첨부</S.InputTitle>
          <S.InputImages>
            {new Array(2).fill(1).map((data, index) => (
              <ProductWriteUpload
                key={`${data}_${index}`}
                index={index}
                onChangeFiles={props.onChangeFiles}
                fileUrls={props.fileUrls}
              />
            ))}
          </S.InputImages>
          <S.InputTitle>메인 사진 설정</S.InputTitle>
          <S.ChooseDiv>
            <S.ChooseMain type="radio" name="main" />
            <S.ChooseLabel>사진1</S.ChooseLabel>
            <S.ChooseMain type="radio" name="main" />
            <S.ChooseLabel>사진2</S.ChooseLabel>
          </S.ChooseDiv>
          <S.SubmitButton>등록하기</S.SubmitButton>
        </form>
      </S.Wrapper>
    </S.Body>
  );
}
