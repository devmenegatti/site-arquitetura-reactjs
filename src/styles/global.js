import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

  }

  body, #root {
    background: #fff;
    -webkit-font-smoothing: antialiased;
    height: 100%;
    cursor: default;
  }

  #root {
    position: relative;
    min-height: 100vh;
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 20px 20px;
  }

  body, input, button {
    font: 11px Roboto, sans-serif;
  }
`;
