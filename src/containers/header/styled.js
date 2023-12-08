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
  font-family: "Gilroy", "Verdana", sans-serif;
  font-weight: 800;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    //color: ${COLOR_BASIC_YELLOW};

    & > svg {
      fill: ${COLOR_BASIC_YELLOW};
    }
  }
`;