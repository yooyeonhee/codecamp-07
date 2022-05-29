import BoardCommentListFunction from "../../../src/components/unit/board/comment/BoardCommentList/BoardCommentList.container";
import BoardCommentWriteFunction from "../../../src/components/unit/board/comment/BoardCommentWrite/BoardCommentWrite.container";
import BoardDetailFunction from "../../../src/components/unit/board/detail/BoardDetail.container";
import * as S from "../../../src/components/unit/board/comment/BoardCommentWrite/BoardCommentWrite.styles";
export default function BoardDetailPage() {
  return (
    <>
      <BoardDetailFunction />
      <S.CommentTitle>
        <S.CommentTitleIcon src="/detail/comment.png" />
        댓글
      </S.CommentTitle>
      <BoardCommentWriteFunction />
      <BoardCommentListFunction />
    </>
  );
}
