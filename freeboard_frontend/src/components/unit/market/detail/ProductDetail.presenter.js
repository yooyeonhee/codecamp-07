import * as S from "./ProductDetail.styles";
import { getDate } from "../../../../commons/libraries/utils";
import Dompurify from "dompurify";
export default function ProductDetailUI(props) {
  return (
    <S.Body>
      <S.Wrapper>
        <S.Board>
          <S.BoardWrapper>
            <S.BoardHeader>
              <S.BoardInfo>
                <S.ProfileImg>
                  <S.PersonalImg src="/detail/profile.png"></S.PersonalImg>
                </S.ProfileImg>
                <S.InfoWrapper>
                  <S.InfoWriter>
                    {props.data?.fetchUseditem.seller.name}
                    {/* {props.data ? props.data.fetchUseditem.writer : "loading"} */}
                  </S.InfoWriter>
                  <S.InfoCreate>
                    Date :{" "}
                    {getDate(
                      props.data
                        ? props.data?.fetchUseditem.createdAt
                        : "loading"
                    )}
                  </S.InfoCreate>
                </S.InfoWrapper>
              </S.BoardInfo>
              <S.BoardFunction>
                <S.linkImg src="/detail/link.png" />
                <S.locationImg src="/detail/location.png" />
              </S.BoardFunction>
            </S.BoardHeader>

            <S.ProductInfo>
              <S.Remarks>
                {props.data ? props.data.fetchUseditem.remarks : "loading"}
              </S.Remarks>
              <S.Name>
                {props.data ? props.data.fetchUseditem.name : "loading"}
              </S.Name>
              <S.Price>
                {props.data ? props.data.fetchUseditem.price : "loading"}
              </S.Price>
            </S.ProductInfo>
            <S.ImageWrapper>
              {props.data?.fetchUseditem.images
                ?.filter((el) => el)
                .map((el) => (
                  <S.Image
                    key={el}
                    src={`https://storage.googleapis.com/${el}`}
                  />
                ))}
            </S.ImageWrapper>

            {typeof window !== "undefined" ? (
              <S.Contents
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(
                    props.data?.fetchUseditem.contents
                  ),
                }}
              ></S.Contents>
            ) : (
              <S.Contents />
            )}
          </S.BoardWrapper>
        </S.Board>
        <S.FunctionButtonArea>
          <S.ButtonWrapper>
            <S.FunctionButton>목록으로</S.FunctionButton>
            <S.FunctionButton onClick={props.onClickMoveToEdit}>
              수정하기
            </S.FunctionButton>
            <S.FunctionButton type="dashed">삭제하기</S.FunctionButton>
          </S.ButtonWrapper>
        </S.FunctionButtonArea>
      </S.Wrapper>
    </S.Body>
  );
}
