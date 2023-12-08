import styled from 'styled-components';
import { COLOR_BASIC_YELLOW } from '../../../constants';

export const SvgContainer = styled.svg`
  cursor: pointer;
  margin-left: auto;

  &:hover {
    fill: ${COLOR_BASIC_YELLOW};
  }
`;