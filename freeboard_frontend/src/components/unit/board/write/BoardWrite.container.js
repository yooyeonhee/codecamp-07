import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";

export default function BoardWriteFunction(props) {
  const router = useRouter();
  // const [data, setData] = useState("")
  const [isActive, setIsActive] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [youtube, setYoutube] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");
  const [isEnrollModalVisible, setIsEnrollModalVisible] = useState(false);
  const [isAddressModalVisible, setIsAddressModalVisible] = useState(false);
  const [resultRouteId, setResultRouteId] = useState("");
  const [callGraphql] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [files, setFiles] = useState([]); // 선택한 파일 자체 저장
  const [fileUrls, setFileUrls] = useState([]); // 파일 미리보기 url 저장
  const [addressDetail, setAddressDetail] = useState("");

  // 작성자 입력
  const onChangeName = (event) => {
    setName(event.target.value);
    if (event.target.value !== "") {
      setNameError("");
    }
    if (event.target.value && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  // 비밀번호 입력
  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
    if (name && event.target.value && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  // 제목 입력
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
    if (name && password && event.target.value && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  // 내용 입력
  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }
    if (name && password && title && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  // 유튜브 주소 입력
  const onChangeYoutube = (event) => {
    setYoutube(event.target.value);
  };

  const onChangeAddressDetail = (event) => {
    setAddressDetail(event.target.value);
  };
  // enroll modal
  const enrollShowModal = () => {
    setIsEnrollModalVisible(true);
  };

  const enrollHandleOk = () => {
    setIsEnrollModalVisible(false);
    router.push(`/boards/${resultRouteId}`);
  };

  const enrollHandleCancel = () => {
    setIsEnrollModalVisible(false);
  };

  // address modal
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
    setZipcode(data.zonecode);
    setIsAddressModalVisible(false);
  };

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

  //수정하기
  const onClickUpdate = async () => {
    // const currentFiles = JSON.stringify(fileUrls);
    // const defaultFiles = JSON.stringify(props.data.fetchBoard.images);
    // const isChangedFiles = currentFiles !== defaultFiles;
    if (
      !title &&
      !contents &&
      !youtube &&
      !address &&
      !addressDetail &&
      !zipcode &&
      !fileUrls
    ) {
      alert("수정한 내용이 없습니다.");
      return;
    }

    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    const updateBoardInput = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    if (youtube) updateBoardInput.youtubeUrl = youtube;
    if (fileUrls) updateBoardInput.images = fileUrls;
    if (zipcode || address || addressDetail) {
      updateBoardInput.boardAddress = {};
      if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode;
      if (address) updateBoardInput.boardAddress.address = address;
      if (addressDetail)
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }
    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.number,
          password,
          updateBoardInput,
        },
      });
      console.log(props.boardData);
      enrollShowModal();
      setResultRouteId(result.data.updateBoard._id);
      //router.push(`/boards/${router.query.number}`);
    } catch (error) {
      alert(error.message);
    }
  };

  //등록하기
  const onClickSubmit = async () => {
    if (!name) {
      setNameError("이름을 적어주세요.");
    }
    if (!password) {
      setPasswordError("비밀번호를 적어주세요.");
    }
    if (!title) {
      setTitleError("제목을 적어주세요.");
    }
    if (!contents) {
      setContentsError("내용은 필수 입력사항 입니다.");
    }

    if (name && password && title && contents) {
      try {
        //정보 저장 api 함수
        const result = await callGraphql({
          variables: {
            createBoardInput: {
              writer: name,
              password: password,
              title: title,
              contents: contents,
              youtubeUrl: youtube,
              images: fileUrls,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
            },
          },
        });
        enrollShowModal();
        setResultRouteId(result.data.createBoard._id);
        // router.push(`/boards/${result.data.createBoard._id}`);
        // setData(result.data.createBoard._id)
      } catch (error) {
        console.log(error);
        alert(error.message); //백엔드 개발자가 만든 error 메시지를 보여줌
      }
    }
  };
  console.log(`ddd${props.boardData?.fetchBoard.images.length}`);
  useEffect(() => {
    if (props.boardData?.fetchBoard.images.length) {
      console.log(`zzzzz${props.boardData?.fetchBoard.images.length}`);
      setFileUrls([...props.boardData?.fetchBoard.images]);
    }
  }, [props.boardData]);

  return (
    <BoardWriteUI
      isActive={isActive}
      name={name}
      password={password}
      title={title}
      contents={contents}
      youtube={youtube}
      nameError={nameError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      onChangeContents={onChangeContents}
      onChangeTitle={onChangeTitle}
      onChangeName={onChangeName}
      onChangePassword={onChangePassword}
      onChangeYoutube={onChangeYoutube}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      boardData={props.boardData}
      isEnrollModalVisible={isEnrollModalVisible}
      enrollHandleCancel={enrollHandleCancel}
      enrollHandleOk={enrollHandleOk}
      enrollShowModal={enrollShowModal}
      isAddressModalVisible={isAddressModalVisible}
      addressHandleCancel={addressHandleCancel}
      addressHandleOk={addressHandleOk}
      addressShowModal={addressShowModal}
      addressHandleComplete={addressHandleComplete}
      address={address}
      zipcode={zipcode}
      onChangeAddressDetail={onChangeAddressDetail}
      onChangeFiles={onChangeFiles}
      fileUrls={fileUrls}
    />
  );
}
