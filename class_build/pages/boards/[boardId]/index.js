import { useRouter } from "next/router";

export default function BoardsDetailPage() {
  const router = useRouter();
  return (
    <div>
      안녕하세요 상세 페이지 입니다.게시글 id는 {router.push.boardID}입니다.
    </div>
  );
}
