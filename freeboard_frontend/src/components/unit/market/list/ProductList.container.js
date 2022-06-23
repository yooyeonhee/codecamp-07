import ProductListUI from "./ProductList.presenter";
import { useQuery } from "@apollo/client";
import { BEST_FETCH_USED_ITEMS, FETCH_USED_ITEMS } from "./ProductList.queries";
import { useRouter } from "next/router";
import _ from "lodash";
import { useEffect, useState } from "react";
export default function ProductList() {
  const router = useRouter();
  // const [keyword, setKeyword] = useState("");
  const [today, setToday] = useState([]);
  const [isSoldout, setIsSoldout] = useState(false);
  const { data: best } = useQuery(BEST_FETCH_USED_ITEMS);

  const { data, refetch, fetchMore } = useQuery(FETCH_USED_ITEMS, {
    variables: { useditemId: router.query.productId, isSoldout: isSoldout },
  });

  const onClickToNew = () => {
    router.push(`/market/new`);
  };

  const onClickTitleToDetail = (el) => () => {
    onClickToday(el);
    router.push(`/market/${el._id}`);
  };

  const onClickListSoldOut = () => {
    setIsSoldout(true);
  };
  const onClickListNotSoldOut = () => {
    setIsSoldout(false);
  };

  // const onChangeSearch = (event) => {
  //   getDebounce(event.target.value);
  // };

  // const getDebounce = _.debounce((data) => {
  //   refetch({ search: data, page: 1 });
  //   setKeyword(data);
  // }, 200);
  useEffect(() => {
    setToday(JSON.parse(sessionStorage.getItem("todayItems") || "[]"));
  }, []);

  //오늘 본 상품
  const onClickToday = (el) => {
    // 1.기존 장바구니 가져오기
    const todayItems = JSON.parse(sessionStorage.getItem("todayItems") || "[]");

    // 2. 이미 담겼는지 확인하기
    const temp = todayItems.filter((todayEl) => todayEl._id === el._id);
    if (temp.length === 1) {
      // alert("이미 담으신 물품입니다.");
      return;
    }

    // 3. 장바구니에 담기
    const { __typename, ...newEl } = el;
    todayItems.push(newEl);
    sessionStorage.setItem("todayItems", JSON.stringify(todayItems));
  };

  //무한 스크롤
  const loadFunc = () => {
    // 데이터가 있을 떄만 fetchMore 해준다.
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditems)
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <ProductListUI
      best={best}
      data={data}
      loadFunc={loadFunc}
      onClickToNew={onClickToNew}
      onClickTitleToDetail={onClickTitleToDetail}
      onClickListSoldOut={onClickListSoldOut}
      onClickListNotSoldOut={onClickListNotSoldOut}
      isSoldout={isSoldout}
      today={today}
      // onChangeSearch={onChangeSearch}
    />
  );
}
