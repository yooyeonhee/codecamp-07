import { memo } from "react";
function PresenterPage(props) {
  console.log("프리젠터 렌더링!");
  return (
    <div>
      <div>=========================</div>
      <h1>프리젠터 영역.</h1>
      <div>=========================</div>
    </div>
  );
}

export default memo(PresenterPage);
