import styled from 'styled-components';
import { COLOR_BASIC_YELLOW } from '../../constants';

export const HeaderContainer = styled.header`
  display:flex;
  align-items: center;
  padding: 0 30px;
`;

export const CartCounter = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 800;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  cursor: default;
`;