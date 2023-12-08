import styled from 'styled-components';
import { COLOR_BASIC_YELLOW } from '../../constants';

export const SidebarContainer = styled.aside`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto) 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  padding-left: ${props => props.$visible ? "60px" : '0'};
  width: ${props => props.$visible ? "328px" : '0'};
  background-color: #e5e5e5;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 5;
  transition: width 0.5s ease 0s, padding-left 0.5s ease 0s ;
  
  &::before{
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 70px;
    background-color: #dedede;
  }

  &::after{
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 70px;
    background-color: #dedede;
  }
  ;
`;

export const InfoContainer = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: ${props => props.$visible ? 'block' : 'none'};
  width: ${props => props.$visible ? '328px' : '0'};
`;

export const CartTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 30px 25px 0;
  margin: 0;
  font-family: "Gilroy","Verdana",sans-serif;
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  z-index: 6;
  position: relative;
`;

export const CartList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 70px 30px 10px 30px;
`;

export const CartItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 30px;
`;

export const CartItemNum = styled.span`
  display: block;
  width: 25px;
  font-family: "Gilroy","Verdana",sans-serif;
  font-weight: 600;
  font-size: 14px;
`;

export const CartItemTitle = styled.span`
  display: block;
`;

export const CartItemPrice = styled.span`
  display: block;
  margin-left: auto;
  font-family: "Gilroy","Verdana",sans-serif;
  font-weight: 800;
  font-size: 16px;
`;

export const TotalContainer = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  display: ${props => props.$visible ? 'flex' : 'none'};
  width: ${props => props.$visible ? '268px' : '0'};
  align-items: center;
  justify-content: space-between;
  margin-right: 30px;
  margin-left: 30px;
  padding-top: 30px;
  border-top: 2px solid black;
  font-family: "Gilroy","Verdana",sans-serif;
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const TotalTitle = styled.div`
  margin-right: 15px;

`;

export const TotalPrice = styled.div`
  font-size: 16px;
  line-height: 20px;
`;

export const BtnContainer = styled.div`
  grid-area: 3 / 1 / 4 / 2;
  position: sticky;
  z-index: 8;
  bottom: 15px;
  right: 0;
  display: none;
  width: 0;
  opacity: 0;
  transition: opacity 0s linear 2s, width 0.5s ease 0s;

  ${props =>
    props.$visible &&
    `
      display: block;
      width: 308px;
      opacity: 1;
      transition: opacity 0s linear 2s, width 0.5s ease 0s;
    `}
`;

export const ByuBtn = styled.button`
  position: absolute;
  left: ${props => props.$position === 'left' ? '0' : 'auto'};
  right: ${props => props.$position === 'left' ? 'auto' : '0'};
  bottom: 15px;
  z-index: 6;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 139px;
  padding: 10px 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-family: "Gilroy","Verdana",sans-serif;
  background-color: ${props => props.$position === 'left' ? '#f0c52e7d' : COLOR_BASIC_YELLOW};
  font-weight: 800;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-align: center;
  color: black;
  border: none;
  cursor: pointer;

  ${props =>
    props.$isDisabled &&
    `
      background-color: #f0c52e7d;
      cursor: default;
      color: rgba(0, 0, 0, 0.3)
    `
  }

`;