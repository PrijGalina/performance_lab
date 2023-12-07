import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navbar = styled.nav`

`;

export const NavbarList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavbarItem = styled.li`

`;

export const NavbarLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin-right: 30px;
  font-family: "Gilroy";
  font-weight: 600;
  font-size: 20px;

  &.active {
    color: #f0c52e;
  }
`;