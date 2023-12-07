import styled from 'styled-components';

export const SortContainer = styled.div`
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 160px 40px auto 40px 60px;
  grid-template-columns: 160px auto 60px;
  gap: 0 40px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  background-color: #e5e5e5;
`;

export const SortTitle = styled.h3`
  padding: 25px 0;
  margin: 0;
  font-family: "Gilroy", "Verdana", sans-serif;
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const SortParamList = styled.ul`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const SortValueList = styled.ul`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0 7px 0 10px;
`;

export const SortParamLink = styled.a`
  display: block;
  margin-right: 33px;
  font-weight: 300;
  font-size: 14px;
  line-height: 19px;
  color: ${props => props.isActive ? 'black' : 'rgba(0, 0, 0, 0.3)'};
  cursor: pointer;
`

export const SortValueLink = styled.a`
  position: relative;
  display: block;
  width: 10px;
  height: 11px;
    cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 11px;
    height: 11px;
    display: block;
    background-image: url(img/arrow-sort.svg);
    background-repeat: no-repeat;
    opacity: ${props => props.isActive ? '1' : '0.2'};
    transform: ${props => props.type === 'asc' ? 'rotate(-180deg)' : 'none'};
  }
`

export const SortValueHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  -webkit-clip-path: inset(100%);
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`