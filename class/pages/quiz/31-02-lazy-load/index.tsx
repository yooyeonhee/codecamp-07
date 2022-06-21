import styled from "@emotion/styled";
import LazyLoad from "react-lazyload";

export default function LazyLoadPage() {
  const imageFile = [
    "https://images.unsplash.com/photo-1614383686435-dd60cf22aae7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1613431812949-77b3351bb23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1517242027094-631f8c218a0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1584735935301-414a21553095?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1517242810446-cc8951b2be40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1518331483807-f6adb0e1ad23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1609517853342-5650d4cb7832?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1563823263008-ec7877629ba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1558492426-df14e290aefa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
  ];
  return (
    <>
      {imageFile.map((el: string, index) => (
        <LazyLoad key={index} height={800}>
          <Img src={el} />
        </LazyLoad>
      ))}
    </>
  );
}

const Img = styled.img`
  width: 500px;
  height: 500px;
`;
