import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  DollarCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";
const { confirm } = Modal;
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  FETCH_USER_LOGGED_IN,
  TOGGLE_USED_ITEM_PICK,
} from "./ProductDetail.queries";
import ProductDetailUI from "./ProductDetail.presenter";
import { useState } from "react";

export default function ProductDetailFunction() {
  const router = useRouter();
  const [deleteProduct] = useMutation(DELETE_USED_ITEM);
  const [toggleUsedItemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
  const [buyAndSell] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.productId },
  });
  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);
  // console.log(userData?.fetchUserLoggedIn._id);
  // console.log(data.fetchUseditem._id);
  // console.log(userData);
  const { confirm } = Modal;
  const showBuyConfirm = () => {
    confirm({
      title: `상품 구매를 위해 ${data.fetchUseditem.price}포인트가 차감됩니다.`,
      icon: <DollarCircleOutlined />,
      content: "구매하시겠습니까?",
      onOk() {
        onClickBuyAndSell();
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  console.log(data);

  const showConfirm = () => {
    confirm({
      title: "상품을 삭제하시겠습니까?",
      icon: <ExclamationCircleOutlined />,
      content: "등록한 상품이 완전히 사라집니다.",
      onOk() {
        onClickDelete();
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  const onClickPick = () => {
    toggleUsedItemPick({
      variables: { useditemId: router.query.productId },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM,
          variables: {
            useditemId: router.query.productId,
          },
        },
      ],
    });
  };

  const success = () => {
    Modal.success({
      content: "구매가 완료되었습니다.",
    });
  };
  const onClickBuyAndSell = async () => {
    try {
      const result = await buyAndSell({
        variables: { useritemId: data?.fetchUseditem._id },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: {
              useditemId: router.query.productId,
            },
          },
        ],
      });
      success();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickDelete = async () => {
    try {
      await deleteProduct({
        variables: { useditemId: router.query.productId },
      });
      router.push(`/market`);
    } catch (error) {
      alert(error.message);
    }
  };
  const onClickMoveToEdit = () => {
    router.push(`/market/${router.query.productId}/edit`);
  };
  const onClickMoveToList = () => {
    router.push(`/market`);
  };

  return (
    <>
      <ProductDetailUI
        // onClickMoveToList={onClickMoveToList}
        // onClickMoveToEdit={onClickMoveToEdit}
        showConfirm={showConfirm}
        // onClickDisLike={onClickDisLike}
        // onClickLike={onClickLike}
        // showDeleteConfirm={showDeleteConfirm}
        router={router}
        data={data}
        userData={userData}
        onClickMoveToEdit={onClickMoveToEdit}
        onClickMoveToList={onClickMoveToList}
        onClickPick={onClickPick}
        showBuyConfirm={showBuyConfirm}
      />
    </>
  );
}
