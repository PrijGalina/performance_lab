import styled, { keyframes } from 'styled-components';
import { COLOR_BASIC_YELLOW } from '../../../constants';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderWrapper = styled.div`
  position: absolute;
  top: calc(50% - 60px);
  left: 50%;
  display: block;
  width: ${({ size }) => (size ? size : '40px')};
  height: ${({ size }) => (size ? size : '40px')};
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${COLOR_BASIC_YELLOW};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;