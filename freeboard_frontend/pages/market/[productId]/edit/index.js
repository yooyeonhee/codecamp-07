import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProductWrite from "../../../../src/components/unit/market/productWrite/productWrite.container";

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      images
      pickedCount
      createdAt
      seller {
        name
      }
    }
  }
`;
export default function ProductEditPage() {
  const router = useRouter();
  const { data, loading } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.productId },
  });

  console.log(data);
  return loading ? <></> : <ProductWrite isEdit={true} productData={data} />;
}
