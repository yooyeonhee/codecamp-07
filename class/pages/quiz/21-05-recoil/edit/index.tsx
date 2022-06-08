// import { useState } from "react";

import { useContext } from "react";
import Write from "../../../../quizsrc/components/units/board/21-write/write.container";
import { GlobalContext } from "../../../_app";
export default function EditPage() {
  const { setIsEdit } = useContext(GlobalContext);
  setIsEdit(true);

  return <Write />;
}
