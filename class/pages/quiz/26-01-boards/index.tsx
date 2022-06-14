import { useQuery, gql, selectHttpOptionsAndBody } from "@apollo/client";
import styled from "@emotion/styled";
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

export default function BoardsPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const [copyBaskets, setCopyBaskets] = useState([]);

  const onClickBasket = (el) => () => {
    // 1.기존 장바구니 가져오기
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    // // 2. 이미 담겼는지 확인하기
    // const temp = baskets.filter((basketEl) => basketEl._id === el._id);
    // if (temp.length === 1) {
    //   alert("이미 담으신 물품입니다.");
    //   return;
    // }

    // 2. 이미 담겼다면 삭제하기
    const temp = baskets.filter((basketEl) => basketEl._id === el._id);
    if (temp.length === 1) {
      const deleteBasket = baskets.filter(
        (basketEl) => basketEl._id !== el._id
      );
      localStorage.setItem("baskets", JSON.stringify(deleteBasket));
      console.log(baskets);
      setCopyBaskets(deleteBasket);
      return;
    }

    // 3. 장바구니에 담기
    const { __typename, ...newEl } = el;
    baskets.push(newEl);

    localStorage.setItem("baskets", JSON.stringify(baskets));
    setCopyBaskets(baskets);
  };

  const select = (el) => {
    return copyBaskets.some((cur) => cur._id === el._id);
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <Row key={el._id}>
          <Column>{el._id}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
          <Column>
            <button onClick={onClickBasket(el)}>
              {select(el) ? "담기 취소" : "게시물 담기"}
            </button>
          </Column>
        </Row>
      ))}
    </div>
  );
}

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 20%;
`;
