import styled from "@emotion/styled";

const Button = styled.button`
  background-color: ${(props) => (props.isActive ? "yellow" : "")};
`;

export default function ButtonBasic(props) {
  return <Button isActive={props.isActive}>{props.title}</Button>;
}
