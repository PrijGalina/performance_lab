import styled from 'styled-components';
import { COLOR_BASIC_YELLOW } from '../../constants';

export const ProductListContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 70px 30px 30px 30px;
  display: -ms-grid;
  display: grid;
  grid-gap: 65px 30px;
  -ms-grid-columns: 300px 300px 300px 300px;
  grid-template-columns: 300px 300px 300px 300px;
  margin-bottom: 40px;
  justify-content: space-between;
`;

export const ProductItem = styled.li`

`;

export const ProductTop = styled.div`
  position: relative;
  margin-bottom: 30px;

  &::before {
    content: ${props => props.$isAlreadyInCart ? "''" : 'none'};
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(238, 238, 238, 0.6);
    z-index: 2;
  }

  > div {
    display: ${props => props.$isAlreadyInCart ? "block" : 'none'};
  }

  &:hover {
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(238, 238, 238, 0.6);
      z-index: 2;
    }

    > div {
      display: block;
    }
  }
`;

export const ProductInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const ProductImage = styled.img`
  background-color: #d9d9d9;
  position: relative;
  display: block;
  z-index: 1;
`;

export const ProductOverlay = styled.div`
  position: absolute;
  display: none;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
`;

export const ProductButton = styled.button`
  position: relative;
  display: block;
  width: 220px;
  padding: 9px 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-family: "Gilroy", "Verdana", sans-serif;
  font-weight: 800;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-align: center;
  color: black;
  border: none;
  background-color: transparent;
  z-index: 2;
  cursor: pointer;
  pointer-events: ${props => props.$isAlreadyInCart ? "none" : 'default'};

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 8px;
    transition: height 0.5s ease 0s;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    background-color: ${COLOR_BASIC_YELLOW};
    z-index: -1;
  }

  &:hover {
    &::before {
      height: ${props => props.$isAlreadyInCart ? "8px" : '40px'};
      transition: height 0.5s ease 0s;
    }
  }

  &:focus {
    &::before {
      height: ${props => props.$isAlreadyInCart ? "8px" : '40px'};
      transition: height 0.5s ease 0s;
    }
  }
`;

export const ProductTitle = styled.a`
    grid-area: 1 / 1 / 2 / 2;
    font-family: "Gilroy", "Verdana", sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.05em;
    color: black;
`;

export const ProductPrice = styled.span`
  grid-area: 1 / 2 / 3 / 3;
  align-self: center;
  justify-self: end;
  display: block;
  font-family: "Gilroy", "Verdana", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.05em;
`;

export const ProductArticles = styled.span`
  grid-area: 2 / 1 / 3 / 2;
  font-family: "Gilroy", "Verdana", sans-serif;
  font-weight: 300;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: rgba(0, 0, 0, 0.4);
`;