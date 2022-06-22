import Head from "next/head";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import MyPageSidebarUI from "./MyPage.Sidebar.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_LOADING,
  FETCH_USER_LOGGED_IN,
} from "./MyPage.Sidebar.queries";

export default function MyPageSidebarFunction() {
  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);
  const [createPoint] = useMutation(CREATE_POINT_TRANSACTION_OF_LOADING);
  console.log(userData?.fetchUserLoggedIn.userPoint.amount);

  //결재 모달
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const router = useRouter();
  const [price, setPrice] = useState();

  const onChangeValue = (event) => {
    setPrice(event.target.value);
  };

  const submitBuy = async (data) => {
    try {
      const result = await createPoint({
        variables: {
          impUid: data.imp_uid,
        },
      });
      handleOk();
      console.log(result);
      router.push(`/mypage`);
    } catch (error) {
      console.log(error);
    }
  };
  const requestPay = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000

    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: "포인트 결제",
        amount: price,
        buyer_email: userData?.fetchUserLoggedIn.email,
        buyer_name: userData?.fetchUserLoggedIn.name,
        // buyer_tel: "010-4242-4242",
        // buyer_addr: "서울특별시 강남구 신사동",
        // buyer_postcode: "01181",
        // m_redirect_url: "http://localhost:3000/quiz/28-01-payment/complete",
        // 결재가 끝나면 이동할 주소
      },
      (rsp) => {
        // callback
        if (rsp.success) {
          console.log(rsp);
          submitBuy(rsp);

          // ...,
          // 결제 성공 시 로직,
          // ...
          // 백엔드에 결제관련 데이터 넘겨주기( => 즉, 뮤테이션 실행하기)
          // ex) createPointTransactionOfLoading
        } else {
          // ...,
          // 결제 실패 시 로직,
          // ...
          alert("결제에 실패했습니다. 다시 시도해주세요!");
        }
      }
    );
  };
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>

        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <MyPageSidebarUI
        userData={userData}
        isModalVisible={isModalVisible}
        showModal={showModal}
        handleCancel={handleCancel}
        onChangeValue={onChangeValue}
        requestPay={requestPay}
      />
    </>
  );
}
