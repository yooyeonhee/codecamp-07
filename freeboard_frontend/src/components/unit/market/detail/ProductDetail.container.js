import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
const { confirm } = Modal;
import { DELETE_USED_ITEM, FETCH_USED_ITEM } from "./ProductDetail.queries";
import ProductDetailUI from "./ProductDetail.presenter";

export default function ProductDetailFunction() {
  const router = useRouter();
  const [deleteProduct] = useMutation(DELETE_USED_ITEM);

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.productId },
  });

  const onClickDelete = async () => {
    try {
      await deleteProduct({
        variables: { useditemId: router.query.productId },
      });
    } catch (error) {
      alert(error.message);
    }
  };
  const onClickMoveToEdit = () => {
    router.push(`/market/${router.query.productId}/edit`);
  };

  return (
    <>
      <ProductDetailUI
        // onClickMoveToList={onClickMoveToList}
        // onClickMoveToEdit={onClickMoveToEdit}
        onClickDelete={onClickDelete}
        // onClickDisLike={onClickDisLike}
        // onClickLike={onClickLike}
        // showDeleteConfirm={showDeleteConfirm}
        router={router}
        data={data}
        onClickMoveToEdit={onClickMoveToEdit}
      />
    </>
  );
}
