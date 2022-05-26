import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./BoardComment.styles";
import { Modal } from "antd";

export default function BoardCommentUI(props) {
  return (
    <S.Body>
      <S.Wrapper>
        <S.CommentArea>
          <S.CommentInputWrapper>
            <S.CommentTitle>
              <S.CommentTitleIcon src="/detail/comment.png" />
              댓글
            </S.CommentTitle>
            <S.CommentInput>
              <S.CommentInputInfo>
                <S.Writer
                  type="text"
                  placeholder="작성자"
                  onChange={props.onChangeWriter}
                ></S.Writer>
                <S.Password
                  type="password"
                  placeholder="비밀번호"
                  onChange={props.onChangePassword}
                ></S.Password>
                <S.Star onChange={props.setRate}></S.Star>
              </S.CommentInputInfo>
              <S.CommentWrite>
                <S.CommentWriteText
                  maxLength="100"
                  type="text"
                  onChange={props.onChangeComment}
                  placeholder="개인정보를 공유 및 요청하거나, 명예 회손, 무단 광고, 
                                불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
                ></S.CommentWriteText>
                <S.CommentWriteSubmit>
                  <S.CommentWriteTextCount>
                    {props.character}/100
                  </S.CommentWriteTextCount>
                  <S.CommentWriteSubmitButton
                    onClick={
                      props.isEdit ? props.onClickUpdate : props.onClickSubmit
                    }
                  >
                    {props.isEdit ? "수정" : "등록"}하기
                  </S.CommentWriteSubmitButton>
                </S.CommentWriteSubmit>
              </S.CommentWrite>
            </S.CommentInput>
          </S.CommentInputWrapper>
          {props.commentData?.fetchBoardComments.map((el, index) => (
            <S.CommentShowArea>
              <S.CommentShowWrapper key={el.id}>
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
                        onClick={props.ChangeEdit}
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
            </S.CommentShowArea>
          ))}
        </S.CommentArea>
      </S.Wrapper>
    </S.Body>
  );
}
