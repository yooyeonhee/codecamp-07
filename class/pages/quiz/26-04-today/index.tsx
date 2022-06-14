import { useQuery, gql, selectHttpOptionsAndBody } from "@apollo/client";
import styled from "@emotion/styled";
import { useStepContext } from "@mui/material";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

export default function TodayPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [today, setToday] = useState([]);

  const getTime = () => {
    const now = new Date();
    const YYYY = String(now.getFullYear());
    const MM = String(now.getMonth()).padStart(2, "0");
    const DD = String(now.getDay()).padStart(2, "0");
    return `${YYYY}-${MM}-${DD}`;
  };

  const onClickTody = (el) => () => {
    const todayBaskets = JSON.parse(
      localStorage.getItem("todayBaskets") || "[]"
    );

    // 2. 이미 담겼는지 확인하기
    const temp = todayBaskets.filter((basketEl) => basketEl._id === el._id);
    if (temp.length === 1) {
      const deleteTodayBasket = todayBaskets.filter(
        (basketEl) => basketEl._id !== el._id
      );
      localStorage.setItem("todayBaskets", JSON.stringify(deleteTodayBasket));
      return;
    }

    const { ...newEl } = el;
    newEl.today = getTime();
    todayBaskets.push(newEl);

    localStorage.setItem("todayBaskets", JSON.stringify(todayBaskets));
    setToday(
      todayBaskets
        .filter((row) => row.today === getTime())
        .map((row) => row._id)
    );
  };

  return (
    <>
      <div>
        {data?.fetchBoards.map((el) => (
          <Row key={el._id} onClick={onClickTody(el)}>
            <Column>{el._id}</Column>
            <Column>{el.writer}</Column>
            <Column>{el.title}</Column>
            <Column></Column>
          </Row>
        ))}
      </div>
      <br></br>
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
        )}
      </div>
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
