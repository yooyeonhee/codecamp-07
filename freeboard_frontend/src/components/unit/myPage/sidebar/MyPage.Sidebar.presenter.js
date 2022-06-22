import * as S from "./MyPage.Sidebar.styles";
export default function MyPageSidebarUI(props) {
  return (
    <S.Body>
      <S.Wrapper>
        <S.InfoWrapper>
          <S.Title>MYPAGE</S.Title>
          <S.ProfileIcon src="/myPage/profile.png" />
          <S.InfoName>{props.userData?.fetchUserLoggedIn.name}</S.InfoName>
          <S.InfoPointItem>
            <S.InfoPointIcon src="/myPage/point.png"></S.InfoPointIcon>
            <S.InfoPoint>
              {props.userData?.fetchUserLoggedIn.userPoint.amount}
            </S.InfoPoint>
          </S.InfoPointItem>
          <S.BuyPoint onClick={props.showModal}>포인트 충전</S.BuyPoint>
          {props.isModalVisible && (
            <S.PointModal
            // title=""
            >
              <S.CancelIcon
                src="/myPage/cancel.png"
                onClick={props.handleCancel}
              />
              <S.PointModalIcon src="/myPage/buyPoint.png" />
              <S.PointModalTitle>
                충전하실 금액을 선택해주세요!
              </S.PointModalTitle>
              <S.SelectWrapper>
                <S.PointSelect name="point" onChange={props.onChangeValue}>
                  <option value="">충전금액</option>
                  <option value="100">100원</option>
                  <option value="500">500원</option>
                  <option value="2000">2000원</option>
                  <option value="5000">5000원</option>
                </S.PointSelect>
                <S.PointButton onClick={props.requestPay}>
                  충전하기
                </S.PointButton>
              </S.SelectWrapper>
            </S.PointModal>
          )}
        </S.InfoWrapper>
        <S.ListWrapper></S.ListWrapper>
      </S.Wrapper>
    </S.Body>
  );
}
