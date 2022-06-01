import { useState } from "react";
import PaginationUI from "./pagination.presenter";

export default function Pagination01(props) {
  const [startPage, setStartPage] = useState(1);
  const lastPage = props.count ? Math.ceil(props.count / 10) : 0;
  const [nowPage, setNowPage] = useState(1);

  const onClickGetPage = (event) => {
    const nowPage = Number(event.target.id);
    setNowPage(nowPage);
    props.refetch({ page: nowPage });
    console.log(nowPage);
  };

  const onClickToPrev = () => {
    if (startPage <= 1) return;
    setStartPage((prev) => prev - 10);
    setNowPage(startPage - 10);
    props.refetch({ page: startPage - 10 });
  };

  const onClickToNext = () => {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
    setNowPage(startPage + 10);
    props.refetch({ page: startPage + 10 });
  };
  return (
    <PaginationUI
      startPage={startPage}
      lastPage={lastPage}
      nowPage={nowPage}
      onClickGetPage={onClickGetPage}
      onClickToPrev={onClickToPrev}
      onClickToNext={onClickToNext}
    />
  );
}
