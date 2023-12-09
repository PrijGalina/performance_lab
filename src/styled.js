import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    margin: 0;
    height: 100vh;
  }
  #root {
    height: inherit;
  }
`;