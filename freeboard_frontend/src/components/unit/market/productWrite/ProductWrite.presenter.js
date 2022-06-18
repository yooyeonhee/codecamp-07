import * as S from "./ProductWrite.styles";
import ProductWriteUpload from "./ProductWriteUpload/ProductWriteUpload.container";
import "react-quill/dist/quill.snow.css";
import KakaoMap from "../../../commons/kakaomap";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function ProductWriteUI(props) {
  return (
    <S.Body>
      <S.Wrapper>
        <S.Title>{props.isEdit ? "상품 수정하기" : "상품 등록하기"}</S.Title>
        <form
          onSubmit={props.handleSubmit(
            props.isEdit ? props.onClickUpdate : props.onClickSubmit
          )}
        >
          <S.InputTitle>상품명</S.InputTitle>
          <S.Input
            type="text"
            defaultValue={props.productData?.fetchUseditem.name}
            {...props.register("name")}
          />
          <S.InputTitle>한줄요약</S.InputTitle>
          <S.Input
            type="text"
            defaultValue={props.productData?.fetchUseditem.remarks}
            {...props.register("remarks")}
          />
          <S.InputTitle>상품설명</S.InputTitle>
          <S.InputQuill
            defaultValue={props.productData?.fetchUseditem.contents}
            onChange={props.onChangeContents}
          />
          <S.InputTitle>판매가격</S.InputTitle>
          <S.Input
            type="number"
            defaultValue={props.productData?.fetchUseditem.price}
            {...props.register("price")}
          />
          {/* <S.InputTitle>태그입력</S.InputTitle> */}
          {/* <S.Input type="text" register={props.register("tags")} /> */}
          <S.MyRow>
            <S.MyColum>
              <S.InputTitle>거래위치</S.InputTitle>
              <S.Map>
                <KakaoMap
                  address={props.address}
                  setLng={props.setLng}
                  setLat={props.setLat}
                />
              </S.Map>
            </S.MyColum>
            <S.MyColum>
              <S.InputTitle>GPS</S.InputTitle>
              <S.MyRow>
                <S.GPSItem>
                  위도(LAT)
                  <input
                    readOnly
                    type="float"
                    value={
                      props.lat ||
                      props.productData?.fetchUseditem.useditemAddress.lat
                    }
                  />
                </S.GPSItem>
                <S.GPSItem>
                  경도(LNG){" "}
                  <input
                    readOnly
                    type="float"
                    value={
                      props.lng ||
                      props.productData?.fetchUseditem.useditemAddress.lng
                    }
                  />
                </S.GPSItem>
              </S.MyRow>
              <S.InputTitle>주소</S.InputTitle>
              <div onClick={props.addressShowModal}>주소 검색</div>
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
              <S.Input
                readOnly
                value={
                  props.address ||
                  props.productData?.fetchUseditem.useditemAddress.address
                }
              ></S.Input>
              <S.Input
                type="text"
                defaultValue={
                  props.productData?.fetchUseditem.useditemAddress.addressDetail
                }
                {...props.register("addressDetail")}
              />
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
          <S.SubmitButton>
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.SubmitButton>
        </form>
      </S.Wrapper>
    </S.Body>
  );
}
