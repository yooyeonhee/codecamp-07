import styled from "@emotion/styled";

export const Page = styled.span`
  border: none;
  background-color: transparent;
  border-bottom: ${(props) => (props.isActive ? "1px solid black" : "none")};
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props) => (props.isActive ? "none" : "pointer")};
`;

export const Pages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 300px;
`;
