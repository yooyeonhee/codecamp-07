import ProductListUI from "./ProductList.presenter";
import { useQuery } from "@apollo/client";
import { BEST_FETCH_USED_ITEMS, FETCH_USED_ITEMS } from "./ProductList.queries";
import { useRouter } from "next/router";
export default function ProductList() {
  const router = useRouter();
  const { data: best } = useQuery(BEST_FETCH_USED_ITEMS);

  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS, {
    variables: { useditemId: router.query.productId },
  });

  const onClickToNew = () => {
    router.push(`/market/new`);
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
    />
  );
}
