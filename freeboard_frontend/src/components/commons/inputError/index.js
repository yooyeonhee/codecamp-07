import styled from "@emotion/styled";

export const Error = styled.div`
  color: red;
  font-size: 9px;
  margin-left: 10px;
`;

export default function InputError(props) {
  return <Error>{props.text}</Error>;
}
