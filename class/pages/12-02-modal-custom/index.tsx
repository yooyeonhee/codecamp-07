import { ChangeEvent, useState } from "react";
import { Modal, Button } from "antd";
export default function ModalCustomPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [password, setPassword] = useState("");
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    console.log(password);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  return (
    <div>
      <Button onClick={showModal}>Open Modal</Button>
      <Modal
        title="비밀번호를 입력해주세요."
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        비밀번호 입력 : <input type="password" onChange={onChangePassword} />
      </Modal>
    </div>
  );
}
