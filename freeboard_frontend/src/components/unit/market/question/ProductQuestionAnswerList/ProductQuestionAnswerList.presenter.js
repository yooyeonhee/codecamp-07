import * as S from "./ProductQuestionAnswerList.styles";
import { getDate } from "../../../../../commons/libraries/utils";
import { Modal } from "antd";
import InfiniteScroll from "react-infinite-scroller";
import ProductQuestionWriteFunction from "../ProductQuestionWrite/ProductQuestionWrite.container";
import ProductQuestionAnswerWriteFunction from "../ProductQuestionAnswerWrite/ProductQuestionAnswerWrite.container";

export default function ProductQuestionAnswerListUI(props) {
  return (
    <S.CommentListArea>
      {/* <InfiniteScroll
        pageStart={0}
        loadMore={props.loadFunc}
        hasMore={true}
        useWindow={false}
      > */}
      {props.data?.fetchUseditemQuestionAnswers.map((el) => (
        <S.CommentShow key={el._id}>
          {props.address !== el._id && (
            <S.CommentShowWrapper>
              <S.CommentProfileImg>
                <S.PersonalImg src="/detail/profile.png"></S.PersonalImg>
              </S.CommentProfileImg>
              <S.CommentShowInfo>
                <S.CommentShowLine1>
                  <S.CommentShowName>{el.user.name}</S.CommentShowName>
                  {el.user.email ===
                  props.loginData?.fetchUserLoggedIn.email ? (
                    <S.CommentShowOption>
                      <S.ModifyIcon
                        id={el._id}
                        src="/detail/modify.png"
                        onClick={props.onClickUpdate}
                      ></S.ModifyIcon>
                      <S.DeleteIcon
                        // id={index}
                        id={el._id}
                        src="/detail/delete.png"
                        onClick={props.onClickDelete}
                      ></S.DeleteIcon>
                    </S.CommentShowOption>
                  ) : (
                    <S.CommentShowOption>
                      <S.AnswerIcon src="/detail/answer.png"></S.AnswerIcon>
                    </S.CommentShowOption>
                  )}
                </S.CommentShowLine1>
                <S.CommentShowLine2>{el.contents}</S.CommentShowLine2>
                <S.CommentShowLine3>{getDate(el.createdAt)}</S.CommentShowLine3>
              </S.CommentShowInfo>
            </S.CommentShowWrapper>
          )}
          {props.address === el._id && (
            <ProductQuestionAnswerWriteFunction
              isEdit={props.isEdit}
              setIsEdit={props.setIsEdit}
              setAddress={props.setAddress}
              address={props.address}
              el={el}
            />
          )}
        </S.CommentShow>
      ))}
      {/* </InfiniteScroll> */}
    </S.CommentListArea>
  );
}
