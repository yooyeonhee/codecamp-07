import styled from "@emotion/styled";

export const Button = styled.button`
  width: 100%;
  height: 64px;
  border: 1px solid #ffffff;
  border-radius: 16px;
  background-color: ${(props) => (props.isActive ? "green" : "")};
  margin: 20px 0px;
`;

export default function Button01(props) {
  return <Button isActive={props.isActive}>{props.title}</Button>;
}
