import * as S from "./BoardDetail.styles";
import { getDate } from "../../../../commons/libraries/utils";

export default function BoardDetailUI(props) {
  return (
    <S.Body>
      <S.Wrapper>
        <S.Board>
          <S.BoardWrapper>
            <S.BoardHeader>
              <S.BoardInfo>
                <S.ProfileImg>
                  <S.PersonalImg src="/detail/profile.png"></S.PersonalImg>
                </S.ProfileImg>
                <S.InfoWrapper>
                  <S.InfoWriter>
                    {props.data ? props.data.fetchBoard.writer : "loading"}
                  </S.InfoWriter>
                  <S.InfoCreate>
                    Date :{" "}
                    {getDate(
                      props.data ? props.data.fetchBoard.createdAt : "loading"
                    )}
                  </S.InfoCreate>
                </S.InfoWrapper>
              </S.BoardInfo>
              <S.BoardFunction>
                <S.linkImg src="/detail/link.png" />
                <S.locationImg src="/detail/location.png" />
              </S.BoardFunction>
            </S.BoardHeader>
            <S.ContentTitle>
              {props.data ? props.data.fetchBoard.title : "loading..."}
            </S.ContentTitle>
            <S.ContentImg src="/detail/img.png" />
            <S.Content>
              {props.data ? props.data.fetchBoard.contents : "loading"}
            </S.Content>
            <S.VideoArea>
              <S.Video src="/detail/video.png"></S.Video>
            </S.VideoArea>
            <S.ContentEvaluationArea>
              <S.ContentEvaluation>
                <S.LIkeWrapper>
                  <S.LikeImg src="/detail/like.png" />
                  <S.LikeCount>
                    {props.data ? props.data.fetchBoard.likeCount : "loading"}
                  </S.LikeCount>
                </S.LIkeWrapper>
                <S.DisLIkeWrapper>
                  <S.DisLikeImg src="/detail/dislike.png"></S.DisLikeImg>
                  <S.DisLikeCount>
                    {props.data
                      ? props.data.fetchBoard.dislikeCount
                      : "loading"}
                  </S.DisLikeCount>
                </S.DisLIkeWrapper>
              </S.ContentEvaluation>
            </S.ContentEvaluationArea>
          </S.BoardWrapper>
        </S.Board>
        <S.FunctionButtonArea>
          <S.ButtonWrapper>
            <S.FunctionButton onClick={props.onClickMoveToList}>
              목록으로
            </S.FunctionButton>
            <S.FunctionButton onClick={props.onClickMoveToEdit}>
              수정하기
            </S.FunctionButton>
            <S.FunctionButton onClick={props.onClickDelete}>
              삭제하기
            </S.FunctionButton>
          </S.ButtonWrapper>
        </S.FunctionButtonArea>
      </S.Wrapper>
    </S.Body>
  );
}
