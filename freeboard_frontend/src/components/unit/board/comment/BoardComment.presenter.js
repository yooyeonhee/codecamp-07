import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./BoardComment.styles";

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
                <S.Star>
                  <img src="/detail/star.png" />
                  <img src="/detail/star.png" />
                  <img src="/detail/star.png" />
                  <img src="/detail/star.png" />
                  <img src="/detail/star.png" />
                </S.Star>
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
                  <S.CommentWriteSubmitButton onClick={props.onClickSubmit}>
                    등록하기
                  </S.CommentWriteSubmitButton>
                </S.CommentWriteSubmit>
              </S.CommentWrite>
            </S.CommentInput>
          </S.CommentInputWrapper>
          {props.commentData?.fetchBoardComments.map((el, index) => (
            <S.CommentShowArea key={el._id}>
              <S.CommentShowWrapper>
                <S.CommentProfileImg>
                  <S.PersonalImg src="/detail/profile.png"></S.PersonalImg>
                </S.CommentProfileImg>
                <S.CommentShowInfo>
                  <S.CommentShowLine1>
                    <S.CommentShowName>
                      {el.writer}
                      <S.Star>
                        <img src="/detail/ystar.png" />
                        <img src="/detail/ystar.png" />
                        <img src="/detail/ystar.png" />
                        <img src="/detail/ystar.png" />
                        <img src="/detail/star.png" />
                      </S.Star>
                    </S.CommentShowName>
                    <S.CommentShowOption>
                      <S.ModifyIcon src="/detail/modify.png"></S.ModifyIcon>
                      <S.DeleteIcon
                        id={index}
                        src="/detail/delete.png"
                        onClick={props.onClickDelete}
                      ></S.DeleteIcon>
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
