import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 50px;
  width: 100%;
  font-size: 30px;
  background-color: transparent;
`;
export const Logo = styled.div`
  height: 30px;
  width: 50px;
`;

export const NavbarWrapper = styled.div`
  position: absolute;
  top: 0px;
  right: 5vw;
  z-index: 3;
`;
export const Navbar = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
`;
export const NavItem = styled.li`
  list-style: none;
`;
export const Item = styled.span`
  font-size: 18px;
  color: black;
  margin-left: 25px;
  font-size: 18px;
  cursor: pointer;
`;
