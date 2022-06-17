import * as S from "./ProductQuestionWrite.styles";

export default function ProductQuestionWriteUI(props) {
  return (
    <S.CommentWriteArea>
      <S.CommentInputWrapper>
        <S.CommentInput>
          <S.CommentWrite>
            <S.CommentWriteText
              maxLength="100"
              type="text"
              onChange={props.onChangeContents}
              defaultValue={props.el?.contents}
              placeholder="개인정보를 공유 및 요청하거나, 명예 회손, 무단 광고, 
                            불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            ></S.CommentWriteText>
            <S.CommentWriteSubmit>
              <S.CommentWriteTextCount>
                {props.count}/100
              </S.CommentWriteTextCount>
              <S.CommentWriteSubmitButton
                onClick={props.onClickSubmit}
                // onClick={
                //   props.isEdit ? props.onClickUpdate : props.onClickSubmit
                // }
              >
                {/* {props.isEdit ? "수정" : "문의"}하기 */}
                문의하기
              </S.CommentWriteSubmitButton>
            </S.CommentWriteSubmit>
          </S.CommentWrite>
        </S.CommentInput>
      </S.CommentInputWrapper>
    </S.CommentWriteArea>
  );
}
