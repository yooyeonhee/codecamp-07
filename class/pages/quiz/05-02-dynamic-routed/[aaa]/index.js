import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      _id
      seller
      name
      detail
      price
    }
  }
`;

export default function DynamicRouted() {
  const router = useRouter();
  const { data } = useQuery(FETCH_PRODUCT, {
    // 쿼리는 객체 형태로 데이터가 들어가 있다. console.log(router.query) 명령어를 통해 확인 가능
    variables: { productId: router.query.aaa },
  });
  console.log(router.query); // -> [aaa] 즉 동적 라우팅 주소가 되는 값을 (Ex number _id 고유값) query에 담아 보낸다.
  // console.log(data) -> fetch 된 데이터 잘 들어갔는지 확인

  return (
    <>
      <div>판매자: {data ? data.fetchProduct.seller : "loading"}</div>
      <div>상품명: {data ? data.fetchProduct.name : "loading"}</div>
      <div>상품내용: {data ? data.fetchProduct.detail : "loading"} </div>
      <div>가격: {data ? data.fetchProduct.price : "loading"} </div>
    </>
  );
}
