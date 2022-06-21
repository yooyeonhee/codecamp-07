import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      images
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPreviewPage() {
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [files, setFiles] = useState<(File | undefined)[]>([
    undefined,
    undefined,
    undefined,
  ]);

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [callGraphql] = useMutation(CREATE_BOARD);

  const handleClickGraphqlApi = async () => {
    // 1.uploadFile들을 Promise.all 로 묶기
    // const results = await Promise.all([
    //   uploadFile({ variables: { file: files[0] } }),
    //   uploadFile({ variables: { file: files[1] } }),
    //   uploadFile({ variables: { file: files[2] } }),
    // ]);

    // 2. uploadFile들을 map으로 축약하기
    // const results = await Promise.all([
    //   undefined,
    //   uploadFile({ variables: { file: files[1] } }),
    //   undefined,
    // ]);
    // files.map(el => el && uploadFile({ variables: { file: el } })) //[undefined, uploadFile({ variables: { file: files[1] } }), undefined]

    const results = await Promise.all(
      files.map((el) => el && uploadFile({ variables: { file: el } }))
    );

    const resultUrl = results.map((el) => (el ? el.data.uploadFile.url : "")); // ["", url2, ""]

    const result = await callGraphql({
      variables: {
        createBoardInput: {
          writer: "김맹구",
          password: "1234",
          title: "맹구입니다.",
          contents: "저는 김씨가 아니에요.",
          images: resultUrl,
        },
      },
    });
    console.log(result);
  };

  const onChangeFile =
    (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) {
        alert("파일이 없습니다.");
        return;
      }

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (data) => {
        if (typeof data.target?.result === "string") {
          // console.log(data.target?.result); // 미리보기 브라우저에서만 사용하고 버린다. (백엔드 db에 저장하기에는 용량이 크다.)

          // 얕은 복사 이용해서 데이터를 넣어준다. 원본 자체를 바꾸면 리렌더가 되지 않는다.
          const tempUrls = [...imageUrls];
          tempUrls[index] = data.target?.result;
          setImageUrls(tempUrls);

          const tempFiles = [...files];
          tempFiles[index] = file;
          setFiles(tempFiles);
        }
      };

      // 임시 미리보기 주소(내 컴퓨터에서만)
      // const result = URL.createObjectURL(file);
      // console.log(result); // 가짜주소이므로 백엔드에 전송해서는 안된다.
    };

  return (
    <>
      <input type="file" onChange={onChangeFile(0)} />
      <input type="file" onChange={onChangeFile(1)} />
      <input type="file" onChange={onChangeFile(2)} />
      <img src={imageUrls[0]} />
      <img src={imageUrls[1]} />
      <img src={imageUrls[2]} />
      <button onClick={handleClickGraphqlApi}>Rest-Api 요청하기!</button>
    </>
  );
}
