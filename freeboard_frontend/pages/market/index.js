import { useRouter } from "next/router";
import ProductList from "../../src/components/unit/market/list/ProductList.container";

export default function MarketListPage() {
  const router = useRouter();
  const onClickToNew = () => {
    router.push(`/market/new`);
  };

  return (
    <>
      <ProductList />
      <button onClick={onClickToNew}>상품등록하기</button>
    </>
  );
}
