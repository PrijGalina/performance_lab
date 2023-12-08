import styled from 'styled-components';

export const ContentContainer = styled.main`
  position: relative;
`;

export const CatalogContainer = styled.section`
  position: relative;
  height: 100%;
`;

export const HiddenTitle = styled.h2`
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
`;

export const CatalogInner = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 70px);
  display:flex;
  flex-direction: column;
  justify-content: space-between;
`;