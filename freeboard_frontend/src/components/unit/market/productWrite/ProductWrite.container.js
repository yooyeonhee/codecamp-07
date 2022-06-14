import { useMutation } from "@apollo/client";
import { useState } from "react";
import ProductWriteUI from "./ProductWrite.presenter";
import { CREATE_USED_ITEM } from "./ProductWrite.queries";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  name: yup.string().required("필수 입력 사항입니다."),
  remarks: yup.string().required("필수 입력 사항입니다."),
  contents: yup.string().required("필수 입력 사항입니다."),
  price: yup.number().required().min(0),
});

export default function ProductWrite() {
  const [files, setFiles] = useState([]);
  const [fileUrls, setFileUrls] = useState([]);
  const [createUsedItem] = useMutation(CREATE_USED_ITEM);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  function onChangeFiles(file, index, url) {
    const newFiles = [...files];
    const newFileUrls = [...fileUrls];

    if (files[index]) {
      newFiles[index] = file;
      newFileUrls[index] = url;
    } else {
      newFiles.push(file);
      newFileUrls.push(url);
    }

    // 변경된 배열을 state에 저장해줍니다.
    setFiles([...newFiles]);
    setFileUrls([...newFileUrls]);
  }

  const onClickSubmit = async (data) => {
    console.log(fileUrls);
    try {
      const result = await createUsedItem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            images: fileUrls,
          },
        },
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ProductWriteUI
      onClickSubmit={onClickSubmit}
      onChangeFiles={onChangeFiles}
      fileUrls={fileUrls}
      handleSubmit={handleSubmit}
      register={register}
    />
  );
}
