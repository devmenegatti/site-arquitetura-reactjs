import { createGlobalStyle } from "styled-components";
import {
  px2rem,
  px2vh
} from '../utils/convertSize';
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
    font-size: ${px2rem(10)};
  }

  #root {
    position: relative;
    min-height: 100vh;
    max-width: ${px2vh(1020)};
    margin: 0 auto;
    padding: 0 ${px2vh(20)} ${px2vh(20)} ${px2vh(20)};
  }

  body, input, button {
    font: 11px Roboto, sans-serif;
  }
`;
