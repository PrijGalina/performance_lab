import styled from 'styled-components';

export const PaginationList = styled.ul`
  list-style: none;
  margin: 0 0 50px;
  padding: 0 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: auto;
  background-color: #ebebeb;
`;

export const PaginationItem = styled.li`
  &:first-child {
    margin-right: auto; 

    & > a {
      width: 120px;
      text-align: center;
      color: black;

      &:hover {
        background-color: ${props => props.$isDisabled ? 'transparent' : '#d9d9d9'};
        color: black;
      }
    }
  }

  &:last-child {
    margin-left: auto; 

    & > a {
      width: 120px;
      text-align: center;
      color: black;

      &:hover {
        background-color: ${props => props.$isDisabled ? 'transparent' : '#d9d9d9'};
        color: black;

      }
    }
  }
`;

export const PaginationLink = styled.a`
  display: block;
  height: 70px;
  font-family: "Gilroy", "Verdana", sans-serif;
  font-weight: 800;
  font-size: 16px;
  line-height: 70px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${props => props.$isActive ? 'black' : 'rgba(0, 0, 0, 0.3)'};
  width: 38px;
  text-align: center;
  cursor: ${props => props.$isDisabled ? 'default' : 'pointer'};

  &:hover {
    color: rgba(0, 0, 0, 0.6)
  }

`;