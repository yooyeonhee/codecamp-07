import { checkImageFileValidation } from "../../../../../commons/libraries/utils";
import BoardWriteUploadUI from "./BoardWriteUpload.presenter";
import { useRef } from "react";
import { Modal } from "antd";
import { UPLOAD_FILE } from "./BoardWriteUpload.queries";
import { useMutation } from "@apollo/client";

export default function BoardWriteUpload(props) {
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
      console.log(result);
      props.onChangeFiles(file, props.index, result.data.uploadFile.url);
    } catch (error) {
      Modal.error({ content: "에러!!" });
    }
  }
  return (
    <BoardWriteUploadUI
      fileRef={fileRef}
      fileUrl={props.fileUrls[props.index]}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
