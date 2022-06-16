import Head from "next/head";
import { Router, useRouter } from "next/router";
import { useState } from "react";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function LoadingPage() {
  const router = useRouter();
  const [price, setPrice] = useState();

  const onChangeValue = (event) => {
    setPrice(event.target.value);
  };
  const requestPay = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp88431145"); // Example: imp00000000

    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: "포인트 결제",
        amount: price,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        // m_redirect_url: "http://localhost:3000/quiz/28-01-payment/complete",
        // 결재가 끝나면 이동할 주소
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          console.log(rsp);
          router.push(`/quiz/28-01-payment/complete`);
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
    <div>
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
      <select name="point" onChange={onChangeValue}>
        <option value="">충전금액</option>
        <option value="500">500원</option>
        <option value="1000">1000원</option>
        <option value="2000">2000원</option>
        <option value="5000">5000원</option>
      </select>
      <button onClick={requestPay}>충전하기</button>
    </div>
  );
}
