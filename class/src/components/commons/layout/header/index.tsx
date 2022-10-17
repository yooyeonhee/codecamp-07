import styled from "@emotion/styled";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100px;
  background-color: skyblue;
`;

const Cart = styled.div`
  width: 100px;
  height: 60px;
  background-color: ${(props) => (props.isIn ? "yellow" : "black")};
  transform: scale(${(props) => (props.isIn ? "1.2" : "1")});
  transition: 0.3s;
`;
export default function LayoutHeader() {
  const [isIn, setIsIn] = useState(false);
  const dragAndDropBasket = (el: any) => {
    // 1.기존 장바구니 가져오기
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    console.log(baskets);
    // 2. 이미 담겼는지 확인하기
    const temp = baskets.filter((basketEl: any) => basketEl._id === el._id);
    if (temp.length === 1) {
      alert("이미 담으신 물품입니다.");
      return;
    }
    // 3. 장바구니에 담기
    const { __typename, ...newEl } = el;
    baskets.push(newEl);

    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  const drop = (event: any) => {
    event.preventDefault();
    let data = event.dataTransfer.getData("object");
    console.log(data);
    let temp = JSON.parse(data);
    temp = { ...temp, count: 1 };
    // console.log(temp);
    dragAndDropBasket(temp);
  };
  const dragOver = (event: any) => {
    event.preventDefault();
    setIsIn(true);
  };
  const dragLeave = () => {
    setIsIn(false);
  };

  return (
    <Wrapper>
      여기는 헤더 영역 입니다.
      <Cart
        onDragOver={dragOver}
        onDrop={drop}
        onDragLeave={dragLeave}
        isIn={isIn}
      >
        장바구니
      </Cart>
    </Wrapper>
  );
}
