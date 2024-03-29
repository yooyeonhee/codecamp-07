import { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";
export default function ModalCustomPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [address, setAddress] = useState("");
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    console.log(address);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleComplete = (data: any) => {
    setAddress(data.address);
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button onClick={showModal}>Open Modal</Button>
      {/* 모달 삭제하고 새로 만드는 방법 */}
      {isModalVisible && (
        <Modal visible={true} onOk={handleOk} onCancel={handleCancel}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
      <div>{address}</div>
    </div>
  );
}
