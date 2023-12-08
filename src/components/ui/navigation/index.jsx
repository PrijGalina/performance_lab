import { useSelector, useDispatch } from 'react-redux';
import { Navbar, NavbarList, NavbarItem, NavbarLink } from './styled';
import { CATALOG_SECTIONS } from '../../../constants';
import { getCatalogSection } from '../../../redux/slices/main/mainSelectors.js';
import { setCatalogSection } from '../../../redux/slices/main/mainSlice.js';

export const Navigation = () => {
  const dispatch = useDispatch();
  const currentCategory = useSelector(getCatalogSection);

  const handleNavLinkClick = (category) => {
    if (currentCategory === category) return;
    localStorage.setItem('currentPage', category);
    dispatch(setCatalogSection(category));
  };

  return (
    <Navbar> 
      <NavbarList>
        <NavbarItem>
          <NavbarLink to={`/${CATALOG_SECTIONS.Food}`} $activeClassName="active" onClick={() => handleNavLinkClick(CATALOG_SECTIONS.Food)}>Food</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to={`/${CATALOG_SECTIONS.Cloth}`} $activeClassName="active" onClick={() => handleNavLinkClick(CATALOG_SECTIONS.Cloth)}>Cloth</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to={`/${CATALOG_SECTIONS.Electronic}`} $activeClassName="active" onClick={() => handleNavLinkClick(CATALOG_SECTIONS.Electronic)}>Electronics</NavbarLink>
        </NavbarItem>
      </NavbarList>
    </Navbar>
  )
}