import styled from "@emotion/styled";

export const Input = styled.input`
  width: 100%;
  height: 64px;
  border: 1px solid black;
  border-radius: 16px;
  margin-bottom: 10px;
  padding: 20px 10px;
`;

export default function Input01(props) {
  return (
    <Input
      type={props.type}
      {...props.register}
      placeholder={props.placeholder}
    />
  );
}
