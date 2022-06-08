import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";

export default function WriteUI() {
  const { isEdit } = useContext(GlobalContext);
  return (
    <>
      <h1>{isEdit ? "수정하기" : "등록하기"}</h1>
    </>
  );
}
