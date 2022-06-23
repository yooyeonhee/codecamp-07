import InfiniteScroll from "react-infinite-scroller";
import * as S from "./ProductList.styles";

export default function ProductListUI(props) {
  return (
    <S.Body>
      <S.TodayList>
        오늘 본 상품
        {props.today?.map((el) => (
          <S.TodayItem id={el._id} onClick={props.onClickTitleToDetail(el)}>
            {el.images[0] === "" || el.images.length === 0 ? (
              <S.TodayItemNoImg>대표 이미지 없음</S.TodayItemNoImg>
            ) : (
              <S.TodayItemImg
                src={`https://storage.googleapis.com/${el.images[0]}`}
              />
            )}
            <S.TodayItemName>{el.name}</S.TodayItemName>
            <S.TodayItemRemarks>{el.remarks}</S.TodayItemRemarks>
            <S.TodayItemPrice>{el.price}원</S.TodayItemPrice>
            <S.TodayItemTags>#adfaf #asdfa</S.TodayItemTags>
          </S.TodayItem>
        ))}
      </S.TodayList>
      <S.Wrapper>
        <S.Title>상품 리스트</S.Title>
        <S.BoxBoards>
          {props.best?.fetchUseditemsOfTheBest.map((el) => (
            <S.BoxBoardWrapper key={el._id}>
              <div>{el.name}</div>
              <div>{el.remarks}</div>
              <div>{el.contents}</div>
              <div>{el.price}</div>
              <div>{el.pickedCount}</div>
            </S.BoxBoardWrapper>
          ))}
        </S.BoxBoards>
        <S.ListOptionArea>
          <S.ListShowOption>
            <S.OptionNotSold
              onClick={props.onClickListNotSoldOut}
              isSoldout={props.isSoldout}
            >
              판매중상품
            </S.OptionNotSold>
            <S.OptionSold
              onClick={props.onClickListSoldOut}
              isSoldout={props.isSoldout}
            >
              판매된상품
            </S.OptionSold>
          </S.ListShowOption>
          <S.SearchBarWrapper>
            <S.SearchInputBox>
              <S.SearchIcon src="/list/search.png" />
              <S.SearchInput
                type="text"
                placeholder="제목을 검색해주세요."
                onChange={props.onChangeSearch}
              />
            </S.SearchInputBox>
            <S.SearchDate>2021.12.02 ~ 2022.01.02</S.SearchDate>
            <S.SearchButton>검색하기</S.SearchButton>
          </S.SearchBarWrapper>
        </S.ListOptionArea>
        <S.ListArea>
          {/* 무한스크롤 */}
          <InfiniteScroll
            pageStart={0}
            loadMore={props.loadFunc}
            hasMore={true}
            useWindow={false}
          >
            {props.data?.fetchUseditems.map((el) => (
              <S.ListItem
                key={el._id}
                id={el._id}
                onClick={props.onClickTitleToDetail(el)}
              >
                {el.images[0] === "" || el.images.length === 0 ? (
                  <S.ItemNoImg>대표 이미지 없음</S.ItemNoImg>
                ) : (
                  <S.ItemImg
                    src={`https://storage.googleapis.com/${el.images[0]}`}
                  />
                )}
                <S.ItemInfo>
                  <S.ItemName>{el.name}</S.ItemName>
                  <S.ItemRemarks>{el.remarks}</S.ItemRemarks>
                  <S.ItemTags>#dsadf #asfaf</S.ItemTags>
                  <S.ItemBox>
                    <S.Icon src="/detail/profile.png" />
                    <S.Seller>{el.seller.name}</S.Seller>
                    <S.Icon src="/detail/pick.png" />
                    <S.PickedCount>{el.pickedCount}</S.PickedCount>
                  </S.ItemBox>
                </S.ItemInfo>
                <S.ItemPrice>
                  <S.PriceIcon src="/detail/price.png" />
                  <S.Price>{`${el.price}원`}</S.Price>
                </S.ItemPrice>
              </S.ListItem>
            ))}
          </InfiniteScroll>
        </S.ListArea>
        <S.ButtonArea>
          <S.NewButton onClick={props.onClickToNew}>등록하기</S.NewButton>
        </S.ButtonArea>
      </S.Wrapper>
    </S.Body>
  );
}
