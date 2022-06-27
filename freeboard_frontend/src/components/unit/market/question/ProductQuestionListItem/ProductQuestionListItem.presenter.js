import { Modal } from "antd";
import { getDate } from "../../../../../commons/libraries/utils";
import ProductQuestionWriteFunction from "../ProductQuestionWrite/ProductQuestionWrite.container";
import * as S from "./ProductQuestionListItem.styles";
export default function ProductQuestionListItemUI(props) {
  return (
    <S.CommentShow>
      {props.address !== props.el._id && (
        <S.AnswerWrapper>
          <S.CommentShowWrapper>
            <S.CommentProfileImg>
              <S.PersonalImg src="/detail/profile.png"></S.PersonalImg>
            </S.CommentProfileImg>
            <S.CommentShowInfo>
              <S.CommentShowLine1>
                <S.CommentShowName>{props.el.user.name}</S.CommentShowName>
                {props.el.user.email ===
                props.loginData?.fetchUserLoggedIn.email ? (
                  <S.CommentShowOption>
                    <S.ModifyIcon
                      id={props.el._id}
                      src="/detail/modify.png"
                      onClick={props.onClickUpdate}
                    ></S.ModifyIcon>
                    <S.DeleteIcon
                      // id={index}
                      id={props.el._id}
                      src="/detail/delete.png"
                      onClick={props.showModal}
                    ></S.DeleteIcon>
                    <Modal
                      visible={props.isModalVisible}
                      onOk={props.handleOk}
                      onCancel={props.handleCancel}
                    >
                      <S.DeleteModalWrapper>
                        <S.DeleteModalIcon />
                        <S.DeleteModal>댓글을 삭제하시겠습니까?</S.DeleteModal>
                      </S.DeleteModalWrapper>
                    </Modal>
                  </S.CommentShowOption>
                ) : (
                  <S.CommentShowOption>
                    <S.AnswerIcon
                      src="/detail/answer.png"
                      onClick={props.onClickAnswer}
                      id={props.el._id}
                    ></S.AnswerIcon>
                  </S.CommentShowOption>
                )}
              </S.CommentShowLine1>
              <S.CommentShowLine2>{props.el.contents}</S.CommentShowLine2>
              <S.CommentShowLine3>
                {getDate(props.el.createdAt)}
              </S.CommentShowLine3>
            </S.CommentShowInfo>
          </S.CommentShowWrapper>
        </S.AnswerWrapper>
      )}
      {props.address === props.el._id && (
        <ProductQuestionWriteFunction
          isEdit={props.isEdit}
          setIsEdit={props.setIsEdit}
          setAddress={props.setAddress}
          address={props.address}
          el={props.el}
        />
      )}
    </S.CommentShow>
  );
}
