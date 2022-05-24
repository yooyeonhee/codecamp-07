import { Modal } from "antd";
export default function ModalAlertPage() {
  const onClickSuccessBtn = () => {
    Modal.success({ content: "게시룸 등록에 성공했습니다." });
  };
  const onClickFailBtn = () => {
    Modal.error({ content: "게시룸 등록에 실패했습니다." });
  };

  return (
    <div>
      <button onClick={onClickSuccessBtn}> 성공했따! </button>
      <button onClick={onClickFailBtn}> 실패했따! </button>
    </div>
  );
}
