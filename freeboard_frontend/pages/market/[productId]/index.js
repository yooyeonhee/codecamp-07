import ProductDetailFunction from "../../../src/components/unit/market/detail/ProductDetail.container";
import ProductQuestionListFunction from "../../../src/components/unit/market/question/ProductQuestionList/ProductQuestionList.container";
import ProductQuestionListUI from "../../../src/components/unit/market/question/ProductQuestionList/ProductQuestionList.presenter";
import ProductQuestionWriteFunction from "../../../src/components/unit/market/question/ProductQuestionWrite/ProductQuestionWrite.container";

export default function DetailPage() {
  return (
    <>
      <ProductDetailFunction />;
      <ProductQuestionWriteFunction />
      <ProductQuestionListFunction />
    </>
  );
}
