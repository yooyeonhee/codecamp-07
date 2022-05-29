import * as S from "./BoardCommentList.styles";
import { getDate } from "../../../../../commons/libraries/utils";
import { Modal } from "antd";
import InfiniteScroll from "react-infinite-scroller";
import BoardCommentWriteFunction from "../BoardCommentWrite/BoardCommentWrite.container";

export default function BoardCommentListUI(props) {
  return (
    <S.CommentListArea>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.loadFunc}
        hasMore={true}
        useWindow={false}
      >
        {props.data?.fetchBoardComments.map((el) => (
          <S.CommentShow key={el._id}>
            {props.address !== el._id && (
              <S.CommentShowWrapper>
                <S.CommentProfileImg>
                  <S.PersonalImg src="/detail/profile.png"></S.PersonalImg>
                </S.CommentProfileImg>
                <S.CommentShowInfo>
                  <S.CommentShowLine1>
                    <S.CommentShowName>
                      {el.writer}
                      <S.Star value={el.rating} disabled></S.Star>
                    </S.CommentShowName>
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
                        onClick={props.showModal}
                      ></S.DeleteIcon>
                      {props.isModalVisible && (
                        <Modal
                          title="비밀번호를 입력해주세요."
                          visible={props.isModalVisible}
                          onOk={props.handleOk}
                          onCancel={props.handleCancel}
                        >
                          <input
                            type="password"
                            onChange={props.onChangeCheckPassword}
                          />
                        </Modal>
                      )}
                    </S.CommentShowOption>
                  </S.CommentShowLine1>
                  <S.CommentShowLine2>{el.contents}</S.CommentShowLine2>
                  <S.CommentShowLine3>
                    {getDate(el.createdAt)}
                  </S.CommentShowLine3>
                </S.CommentShowInfo>
              </S.CommentShowWrapper>
            )}
            {props.address === el._id && (
              <BoardCommentWriteFunction
                isEdit={props.isEdit}
                setIsEdit={props.setIsEdit}
                setAddress={props.setAddress}
                address={props.address}
              />
            )}
          </S.CommentShow>
        ))}
      </InfiniteScroll>
    </S.CommentListArea>
  );
}
