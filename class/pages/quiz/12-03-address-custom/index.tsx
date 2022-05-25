import { Modal, Button } from "antd";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

export default function ModalAddressCustomPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [address, setAddress] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleComplete = (data: any) => {
    setAddress(data.address);
    setIsModalVisible(false);
  };

  return (
    <div style={{ display: "flex" }}>
      <Button onClick={showModal}>모달열기</Button>
      {isModalVisible && (
        <Modal
          title="주소검색"
          visible={true}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
      <div>{address}</div>
    </div>
  );
}
