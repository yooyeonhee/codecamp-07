import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef, useState } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState();
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);
    try {
      // 1. uploadFile API 요청하기(요청 결과 url 받아오기)
      const result = await uploadFile({
        variables: {
          file,
        },
      });
      // 2. 요청 결과 URL을 state에 저장하기
      setImageUrl(result.data.uploadFile.url);
    } catch (error) {
      Modal.error({ content: "에러발생!!" });
    }
  };
  const onClickImage = () => {
    fileRef.current?.click();
  };
  return (
    <div>
      <h1>이미지 업로드 연습하기</h1>
      <div
        style={{ width: "50px", height: "50px", backgroundColor: "#ccc" }}
        onClick={onClickImage}
      >
        +
      </div>
      <input
        type="file"
        ref={fileRef}
        onChange={onChangeFile}
        multiple
        style={{ display: "none" }}
      />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
    </div>
  );
}
