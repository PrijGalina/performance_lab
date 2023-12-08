import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  display: none;
  padding-left: 60px;
  width: 328px;
  background-color: #e5e5e5;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 5;
  
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
`