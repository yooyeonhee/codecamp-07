import { useMoveToPage } from "../../src/components/commons/hooks/useMoveToPage";

export default function CustomHooksUseMoveToPage() {
  const { onClickMoveToPage, visitedPage } = useMoveToPage();
  return (
    <div>
      <button onClick={onClickMoveToPage("/boards")}>게시판으로 이동</button>
      <button onClick={onClickMoveToPage("/markets")}>마이페이지로 이동</button>
      <button onClick={onClickMoveToPage("/mypages")}>마켓으로 이동</button>
    </div>
  );
}
