import { useState } from "react";
import ImageBoxUI from "./imageBox.presenter";

export default function ImageBox() {
  const [files, setFiles] = useState<File[]>([]);
  const [fileUrls, setFileUrls] = useState<string[]>([]);

  function onChangFiles(file: File, index: number, url: string) {
    const newFiles = [...files];
    const newFileUrls = [...fileUrls];

    if (files[index]) {
      newFiles[index] = file;
      newFileUrls[index] = url;
    } else {
      newFiles.push(file);
      newFileUrls.push(url);
    }

    setFiles([...newFiles]);
    setFileUrls([...newFileUrls]);
  }
  console.log(fileUrls);

  return (
    <ImageBoxUI
      onChangeFiles={onChangFiles}
      setFileUrls={setFileUrls}
      fileUrls={fileUrls}
    />
  );
}
