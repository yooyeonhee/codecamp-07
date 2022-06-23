import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";

import ProductWriteUI from "./ProductWrite.presenter";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./ProductWrite.queries";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";

const schema = yup.object({
  name: yup.string().required("필수 입력 사항입니다."),
  remarks: yup.string().required("필수 입력 사항입니다."),
  contents: yup.string().required("필수 입력 사항입니다."),
  price: yup.number().required().min(0),
});

export default function ProductWrite(props) {
  const router = useRouter();
  const [files, setFiles] = useState([]);
  const [fileUrls, setFileUrls] = useState([]);
  const [createUsedItem] = useMutation(CREATE_USED_ITEM);
  const [updateUsedItem] = useMutation(UPDATE_USED_ITEM);
  const [address, setAddress] = useState("");
  const [lat, setLat] = useState(3.0);
  const [lng, setLng] = useState(3.0);
  const [isAddressModalVisible, setIsAddressModalVisible] = useState(false);

  const { register, handleSubmit, setValue, trigger, watch } = useForm({
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

  const onChangeContents = (value) => {
    // register로 등록하지 않고 강제로 값을 넣어주는 기능
    setValue("contents", value === "<p><br></p>" ? "" : value);

    // onchange 됐다고 react-hook-form에 알려주는 기능
    trigger("contents");
  };
  console.log(watch());
  const addressShowModal = () => {
    setIsAddressModalVisible(true);
  };

  const addressHandleOk = () => {
    setIsAddressModalVisible(false);
  };

  const addressHandleCancel = () => {
    setIsAddressModalVisible(false);
  };

  const addressHandleComplete = (data) => {
    setAddress(data.address);
    setIsAddressModalVisible(false);
  };
  const onClickSubmit = async (data) => {
    try {
      const result = await createUsedItem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            useditemAddress: {
              address,
              addressDetail: data.addressDetail,
              lat,
              lng,
            },
            images: fileUrls,
          },
        },
      });
      router.push(`/market/${result.data.createUseditem._id}`);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickUpdate = async (data) => {
    if (
      !data.name &&
      !data.remarks &&
      !data.contents &&
      !data.price &&
      !fileUrls &&
      !address
    ) {
      alert("수정한 내용이 없습니다.");
      return;
    }
    const updateUseditemInput = {};
    if (data.name) updateUseditemInput.name = data.name;
    if (data.remarks) updateUseditemInput.remarks = data.remarks;
    if (data.contents) updateUseditemInput.contents = data.contents;
    if (data.price) updateUseditemInput.price = data.price;
    if (fileUrls) updateUseditemInput.images = fileUrls;

    if (address || data.addressDetail) {
      updateUseditemInput.useditemAddress = {};
      if (address) {
        updateUseditemInput.useditemAddress.address = address;
        updateUseditemInput.useditemAddress.lat = lat;
        updateUseditemInput.useditemAddress.lng = lng;
      }
      if (data.addressDetail)
        updateUseditemInput.useditemAddress.addressDetail = data.addressDetail;
    }
    try {
      const result = await updateUsedItem({
        variables: {
          useditemId: router.query.productId,
          updateUseditemInput,
        },
      });
      // setResultRouteId(result.data.updateUseditemInput._id);
      router.push(`/market/${result.data.updateUseditem._id}`);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(props.productData?.fetchUseditem.images);
  useEffect(() => {
    if (props.productData?.fetchUseditem.images.length) {
      setFileUrls([...props.productData?.fetchUseditem.images]);
    }
  }, [props.productData]);

  return (
    <ProductWriteUI
      isEdit={props.isEdit}
      productData={props.productData}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onChangeFiles={onChangeFiles}
      fileUrls={fileUrls}
      handleSubmit={handleSubmit}
      register={register}
      onChangeContents={onChangeContents}
      isAddressModalVisible={isAddressModalVisible}
      addressHandleCancel={addressHandleCancel}
      addressHandleOk={addressHandleOk}
      addressShowModal={addressShowModal}
      addressHandleComplete={addressHandleComplete}
      address={address}
      setLng={setLng}
      setLat={setLat}
      lng={lng}
      lat={lat}
    />
  );
}
