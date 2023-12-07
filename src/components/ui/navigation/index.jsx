import { Navbar, NavbarList, NavbarItem, NavbarLink } from './styled';

export const Navigation = () => {
  return (
    <Navbar> 
      <NavbarList>
        <NavbarItem>
          <NavbarLink to="/food" activeclassname="active">Food</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/cloth" activeclassname="active">Cloth</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/electronics" activeclassname="active">Electronics</NavbarLink>
        </NavbarItem>
      </NavbarList>
    </Navbar>
  )
}