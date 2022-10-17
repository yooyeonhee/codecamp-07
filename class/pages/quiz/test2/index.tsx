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
  const [info, setInfo] = useState([]);

  // const dragAndDropBasket = (el: any) => {
  //   // 1.기존 장바구니 가져오기
  //   const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
  //   // 2. 이미 담겼는지 확인하기
  //   const temp = baskets.filter((basketEl: any) => basketEl._id === el._id);
  //   if (temp.length === 1) {
  //     alert("이미 담으신 물품입니다.");
  //     return;
  //   }
  //   // 3. 장바구니에 담기
  //   const { __typename, ...newEl } = el;
  //   baskets.push(newEl);

  //   localStorage.setItem("baskets", JSON.stringify(baskets));
  // };

  const drag = (event: any) => {
    event.dataTransfer.setData("object", event.target.id);
  };
  // const drop = (event: any) => {
  //   event.preventDefault();
  //   let data = event.dataTransfer.getData("object");
  //   let temp = JSON.parse(data);
  //   temp = { ...temp, count: 1 };
  //   // console.log(temp);
  //   dragAndDropBasket(temp);
  // };
  // const dragOver = (event: any) => {
  //   event.preventDefault();
  // };
  return (
    <div>
      {/* <Cart onDragOver={dragOver} onDrop={drop}>
        장바구니
      </Cart> */}
      {data?.fetchBoards.map((el: any) => (
        <Row
          key={el._id}
          id={JSON.stringify(el)}
          draggable={true}
          onDragStart={drag}
        >
          <Column>{el._id}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
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
// const Cart = styled.div`
//   position: absolute;
//   top: 200px;
//   right: 50px;
//   height: 200px;
//   width: 200px;
//   background-color: red;
// `;
