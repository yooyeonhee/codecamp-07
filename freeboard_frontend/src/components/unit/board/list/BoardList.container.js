import { useRouter } from "next/router";
import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import {
  BEST_FETCH_BOARDS,
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
} from "./BoardList.queries";
import _ from "lodash";
import { useState } from "react";

export default function BoardListFunction() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: best } = useQuery(BEST_FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const onClickTitleToDetail = (event) => {
    // 이벤트 버블링을 통한 이벤트 위임
    router.push(`/boards/${event.currentTarget.id}`);
    // console.log(event.currentTarget);
  };
  // const onClickDeleteBoards = () => {
  //   console.log(checkList.length);
  // };

  const onClickToNew = () => {
    router.push(`/boards/new`);
  };

  // console.log(checkList);

  // const onClickCheckAll = () => {
  //   if (checkList.length !== data.fetchBoards.length) {
  //     setCheckList(data);
  //   } else {
  //     setCheckList([]);
  //   }
  // };

  // const onCheckedItem = (list) => {
  //   // 모든 원소가 조건에 맞으면 true (checkLis에 값이 없음)
  //   // console.log(list.number);
  //   // console.log(checkList);
  //   if (checkList.every((cur) => cur.number !== list.number)) {
  //     setCheckList([...checkList, list]);
  //   } else {
  //     // 체크된것만 제외하고 배열에 담는다.
  //     const result = checkList.filter((cur) => cur.number !== list.number);
  //     setCheckList(result);
  //     console.log(result);
  //   }
  // };

  // const isChecked = (list) => {
  //   return checkList.some((cur) => cur.number === list.number);
  // };

  const onChangeSearch = (event) => {
    getDebounce(event.target.value);
  };

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setKeyword(data);
  }, 200);

  return (
    <BoardListUI
      data={data}
      best={best}
      onClickTitleToDetail={onClickTitleToDetail}
      onClickToNew={onClickToNew}
      refetch={refetch}
      count={dataBoardsCount?.fetchBoardsCount}
      onChangeSearch={onChangeSearch}
      // onClickDeleteBoards={onClickDeleteBoards}
      // onClickCheckAll={onClickCheckAll}
      // onCheckedItem={onCheckedItem}
      // isChecked={isChecked}
      // checkList={checkList}
      keyword={keyword}
    />
  );
}
