import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;
interface IBasketItems {
  _id: string;
  writer: string;
  title: string;
}

export default function MapBoardPage() {
  const [basketItems, setBasketItems] = useState<IBasketItems[]>([]);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasketItems(baskets);
  }, []);

  // localStorage.getItem("baskets"); 사용하지 마세요.

  return (
    <div>
      {basketItems.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>{el._id}</MyColumn>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
    </div>
  );
}
