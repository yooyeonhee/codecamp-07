import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($search: String, $page: Int, $isSoldout: Boolean) {
    fetchUseditems(search: $search, page: $page, isSoldout: $isSoldout) {
      _id
      name
      remarks
      contents
      price
      tags
      images
    }
  }
`;

export default function TodayPage() {
  const { data } = useQuery(FETCH_USED_ITEMS);
  const [today, setToday] = useState([]);

  console.log(data);
  const onClickTody = (el) => () => {
    const todayBaskets = JSON.parse(
      sessionStorage.getItem("todayBaskets") || "[]"
    );

    // 2. 이미 담겼는지 확인하기
    const temp = todayBaskets.filter((basketEl) => basketEl._id === el._id);
    if (temp.length === 1) {
      // const deleteTodayBasket = todayBaskets.filter(
      //   (basketEl) => basketEl._id !== el._id
      // );
      // localStorage.setItem("todayBaskets", JSON.stringify(deleteTodayBasket));
      return;
    }

    const { ...newEl } = el;
    todayBaskets.push(newEl);

    sessionStorage.setItem("todayBaskets", JSON.stringify(todayBaskets));
    setToday(todayBaskets);
  };
  console.log(today);

  return (
    <>
      <div>
        {data?.fetchUseditems.map((el) => (
          <Row key={el._id} onClick={onClickTody(el)}>
            <Column>{el._id}</Column>
            <Column>{el.name}</Column>
            <Column>{el.remarks}</Column>
            <Column>{el.price}</Column>
          </Row>
        ))}
      </div>
      {/* <br></br>
      <br />
      <div>오늘 본 목록</div>
      <div>
        {data?.fetchBoards.map(
          (el) =>
            today.includes(el._id) && (
              <Row key={el._id} onClick={onClickTody(el)}>
                <Column>{el._id}</Column>
                <Column>{el.writer}</Column>
                <Column>{el.title}</Column>
              </Row>
            )
        )} */}
      {/* </div> */}
    </>
  );
}

const Row = styled.div`
  display: flex;
  cursor: pointer;
`;

const Column = styled.div`
  width: 20%;
`;
