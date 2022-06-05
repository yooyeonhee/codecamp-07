import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef } from "react";
import { checkFileValidation } from "../../../../commons/libraries/fileValidation";
import UploadBoxUI from "./uploadBox.presenter";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function UploadBox(props: any) {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const fileRef = useRef<HTMLInputElement>(null);

  function onClickUpload() {
    fileRef.current?.click();
  }

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const file: any = event.target.files?.[0];
    if (!checkFileValidation(file)) return;

    try {
      // 1. uploadFile API 요청하기(요청 결과 url 받아오기)
      const result = await uploadFile({
        variables: {
          file,
        },
      });
      // 2. 요청 결과 URL을 state에 저장하기
      props.setImageUrl(result.data.uploadFile.url);
    } catch (error) {
      Modal.error({ content: "에러발생!!" });
    }
  }
  console.log(props.fileUrls);
  return (
    <UploadBoxUI
      fileRef={fileRef}
      fileUrl={props.fileUrls[props.index]}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
