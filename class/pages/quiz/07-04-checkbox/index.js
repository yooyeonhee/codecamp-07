import { useState } from "react";
import * as S from "../../../styles/checkbox";

const dataList = [
  { number: 1, title: "9월달 시스템 점검 안내입니다.", date: "2020.09.19" },
  {
    number: 2,
    title: "안녕하세요! 공지사항 전달드립니다.",
    date: "2020.09.17",
  },
  { number: 3, title: "개인정보 처리방침 사전 안내", date: "2020.09.12" },
  { number: 4, title: "iOS 10.0 이하 지원 중단 안내", date: "2020.08.10" },
  { number: 5, title: "사이용약관 변경 사전 안내", date: "2020.08.01" },
  { number: 6, title: "개인정보 처리방침 사전 안내", date: "2020.07.19" },
];

export default function TemplateStringsArray() {
  // 체크될 객체를 담기 위한 배열
  const [checkList, setCheckList] = useState([]);
  console.log(checkList);

  const onClickCheckAll = () => {
    if (checkList.length !== dataList.length) {
      setCheckList(dataList);
    } else {
      setCheckList([]);
    }
  };

  const onCheckedItem = (list) => {
    // checklist에 현재 선택한 객체가 들어있지 않다.
    if (checkList.every((cur) => cur.number !== list.number)) {
      setCheckList([...checkList, list]);
    }
    // checklist에 현재 선택한 객체가 들어있다.
    else {
      const result = checkList.filter((cur) => cur.number !== list.number);
      setCheckList(result);
      // console.log(result);
    }
  };

  // true인 경우 체크 표시된 상태
  const isChecked = (list) => {
    return checkList.some((cur) => cur.number === list.number);
  };

  return (
    <S.Body>
      <S.Wrapper>
        <S.Row>
          <S.Check>
            <input
              type="checkbox"
              onChange={onClickCheckAll}
              checked={checkList.length === dataList.length}
            />
          </S.Check>
          <S.Num>번호</S.Num>
          <S.Title>제목</S.Title>
          <S.Date>작성일</S.Date>
        </S.Row>
        {dataList.map((list, index) => (
          <S.MyRow key={index}>
            <S.MyCheck>
              <input
                type="checkbox"
                onChange={() => onCheckedItem(list)}
                checked={isChecked(list)}
              />
            </S.MyCheck>
            <S.MyNumber>{list.number}</S.MyNumber>
            <S.MyTitle>{list.title}</S.MyTitle>
            <S.MyDate>{list.date}</S.MyDate>
          </S.MyRow>
        ))}
      </S.Wrapper>
      {/* <S.MyFunction>
        <S.DeleteBtn>선택 삭제</S.DeleteBtn>
        <S.SelectCount>1</S.SelectCount>
      </S.MyFunction> */}
    </S.Body>
  );
}
