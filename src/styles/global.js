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
    background: #ccc;
    -webkit-font-smoothing: antialiased;
    height: 100%;
    cursor: default;
  }

  #root {
    background: #fff;
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
