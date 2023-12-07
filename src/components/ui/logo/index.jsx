import { LogotypeIcon } from './styled';
import { NavLink } from 'react-router-dom';

export const Logotype = () => {
  return (
    <NavLink to="/">
      <LogotypeIcon src="img/logo.svg" alt="site-logotype" width="164" height="42"/>
    </NavLink>
  )
}