import { checkImageFileValidation } from "../../../../../commons/libraries/utils";
import ProductWriteUploadUI from "./ProductWriteUpload.presenter";
import { Modal } from "antd";
import { UPLOAD_FILE } from "./ProductWriteUpload.queries";
import { useMutation } from "@apollo/client";
import { useRef } from "react";

export default function ProductWriteUpload(props) {
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const fileRef = useRef(null);

  function onClickUpload() {
    // console.log(props.fileUrls);
    fileRef.current?.click();
  }

  async function onChangeFile(event) {
    const file = event.target.files?.[0];
    // console.log(file);
    if (!checkImageFileValidation(file)) return;
    try {
      const result = await uploadFile({
        variables: {
          file,
        },
      });
      // console.log(result.data.uploadFile.url);
      props.onChangeFiles(file, props.index, result.data.uploadFile.url);
    } catch (error) {
      Modal.error({ content: "에러!!" });
    }
  }
  // console.log(props.fileUrls);
  return (
    <ProductWriteUploadUI
      fileRef={fileRef}
      fileUrl={props.fileUrls[props.index]}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
