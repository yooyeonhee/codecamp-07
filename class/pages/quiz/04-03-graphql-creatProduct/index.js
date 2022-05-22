import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      number
      message
      _id
    }
  }
`;
export default function graphqlApi() {
  const [data, setData] = useState("");
  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");
  const [callGraphql] = useMutation(CREATE_PRODUCT);

  const handleClickGraphqlApi = async () => {
    const result = await callGraphql({
      variables: {
        seller,
        createProductInput: {
          name,
          detail,
          price: Number(price),
        },
      },
    });
    console.log(result);
    setData(result.data.createProduct._id);
  };
  const onChangeSeller = (event) => {
    setSeller(event.target.value);
  };
  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangeDetail = (event) => {
    setDetail(event.target.value);
  };
  const onChangePrice = (event) => {
    setPrice(event.target.value);
  };

  return (
    <div>
      판매자 : <input type="text" onChange={onChangeSeller}></input>
      상품명 : <input type="text" onChange={onChangeName}></input>
      상세내용 : <input type="text" onChange={onChangeDetail}></input>
      가격 : <input type="text" onChange={onChangePrice}></input>
      <div>{data}</div>
      <button onClick={handleClickGraphqlApi}>GRAPHQL-API 요청하기</button>
    </div>
  );
}
