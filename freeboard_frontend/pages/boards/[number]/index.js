import BoardCommentListFunction from "../../../src/components/unit/board/comment/BoardCommentList/BoardCommentList.container";
import BoardCommentWriteFunction from "../../../src/components/unit/board/comment/BoardCommentWrite/BoardCommentWrite.container";
import BoardDetailFunction from "../../../src/components/unit/board/detail/BoardDetail.container";
import * as S from "../../../src/components/unit/board/comment/BoardCommentWrite/BoardCommentWrite.styles";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { withAuth } from "../../../src/components/commons/hocs/withAuth";

export const FETCH_COMMENTS = gql`
  query fetchBoardComments($boardId: ID!) {
    fetchBoardComments(boardId: $boardId) {
      _id
      writer
      contents
      createdAt
      rating
    }
  }
`;
function BoardDetailPage() {
  const router = useRouter();

  const { data: commentData } = useQuery(FETCH_COMMENTS, {
    variables: { boardId: router.query.number },
  });
  return (
    <>
      <BoardDetailFunction />
      <S.CommentTitle>
        <S.CommentTitleIcon src="/detail/comment.png" />
        댓글
      </S.CommentTitle>
      <BoardCommentWriteFunction commentData={commentData} />
      <BoardCommentListFunction />
    </>
  );
}

export default withAuth(BoardDetailPage);
