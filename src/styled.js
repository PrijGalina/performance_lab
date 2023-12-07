import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Gilroy";
    src: local("Gilroy"), url("../fonts/Gilroy-Extrabold.woff2") format("woff2"),
      url("../fonts/Gilroy-Extrabold.woff") format("woff");
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: "Gilroy";
    src: local("Gilroy"), url("../fonts/Gilroy-Semibold.woff2") format("woff2"),
      url("../fonts/Gilroy-Semibold.woff") format("woff");
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: "Gilroy";
    src: local("Gilroy"), url("../fonts/Gilroy-Light.woff2") format("woff2"),
      url("../fonts/Gilroy-Light.woff") format("woff");
    font-weight: 300;
    font-style: normal;
  }

  /* «Open Sans» */
  @font-face {
    font-family: "Open Sans";
    src: local("Open Sans"), url("../fonts/opensanslight.woff2") format("woff2"),
      url("../fonts/opensanslight.woff") format("woff");
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "Open Sans";
    src: local("Open Sans"), url("../fonts/opensans.woff2") format("woff2"), url("../fonts/opensans.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }


  body {
    font-family: Open Sans, sans-serif;
    font-weight: 300;
    margin: 0;
    height: 100vh;
  }
  #root {
    height: inherit;
  }
`;