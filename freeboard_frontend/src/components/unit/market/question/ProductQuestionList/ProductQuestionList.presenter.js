import * as S from "./ProductQuestionList.styles";
import InfiniteScroll from "react-infinite-scroller";
import ProductQuestionListItemFunction from "../ProductQuestionListItem/ProductQuestionListItem.container";
import ProductQuestionAnswerListFunction from "../ProductQuestionAnswerList/ProductQuestionAnswerList.container";
import ProductQuestionAnswerWriteFunction from "../ProductQuestionAnswerWrite/ProductQuestionAnswerWrite.container";

export default function ProductQuestionListUI(props) {
  return (
    <S.CommentListArea>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.loadFunc}
        hasMore={true}
        useWindow={false}
      >
        {props.data?.fetchUseditemQuestions.map((el) => (
          <S.CommentItems key={el._id}>
            <ProductQuestionListItemFunction
              el={el}
              setIsAnswer={props.setIsAnswer}
              setAnswerAddress={props.setAnswerAddress}
            />
            {/* <ProductQuestionAnswerListFunction /> */}
            {/* {console.log(props.answerAddress)}
            {console.log(el._id)} */}
            {props.answerAddress === el._id && (
              <ProductQuestionAnswerWriteFunction
                answerAddress={props.answerAddress}
                setAnswerAddress={props.setAnswerAddress}
              />
            )}
            <ProductQuestionAnswerListFunction addressId={el._id} />
          </S.CommentItems>
        ))}
      </InfiniteScroll>
    </S.CommentListArea>
  );
}
