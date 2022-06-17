import ProductListUI from "./ProductList.presenter";
import { useQuery } from "@apollo/client";
import { BEST_FETCH_USED_ITEMS } from "./ProductList.queries";

export default function ProductList() {
  const { data: best } = useQuery(BEST_FETCH_USED_ITEMS);

  return <ProductListUI best={best} />;
}
