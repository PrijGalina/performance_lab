import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLOR_BASIC_YELLOW } from '../../../constants';

export const Navbar = styled.nav``;

export const NavbarList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavbarItem = styled.li``;

export const NavbarLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin-right: 30px;
  font-family: "Gilroy";
  font-weight: 600;
  font-size: 20px;

  &.active {
    color: ${COLOR_BASIC_YELLOW};
  }
`;