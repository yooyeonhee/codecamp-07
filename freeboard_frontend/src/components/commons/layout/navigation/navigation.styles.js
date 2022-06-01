import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 64px;
  width: 100%;
  background-color: #636888;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: white;
`;

export const MenuItem = styled.div`
  margin: 0px 60px;
  cursor: pointer;

  :hover {
    color: white;
  }
`;
