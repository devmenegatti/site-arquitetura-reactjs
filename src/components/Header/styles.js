import styled from 'styled-components';
import { Link } from "react-router-dom";

import { px2rem, px2vh} from "../../utils/convertSize";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${px2vh(100)};
  border-bottom: 1px solid #ccc;

  > div {
    display: flex;
    max-width: 35%;
    > img {
      max-height: 100%;
      max-width: 100%;
    }
  }
`;

export const NavigationBar = styled.nav`
  flex-grow: 2;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    margin-left: ${px2vh(30)};

    li {
      list-style: none;
      padding: ${px2vh(6)} ${px2vh(15)};
      font-family: 'Courier New', Courier, monospace;
      user-select: none;
    }
  }
`;

export const RedirectPage = styled(Link)`
  text-decoration: none;
  color: #666;
  transition: color 0.2s;
  white-space: nowrap;

  &:hover {
    color: #333;
    font-weight: bold;
  }
`;

export const SubMenu = styled.li`
  &:hover {
    ul {
      visibility: visible;
    }
    span {
      color: #333;
      font-weight: bold;
      cursor: pointer;
    }
  }
  span {
    text-decoration: none;
    color: #666;
    transition: color 0.2s;
    white-space: nowrap;
  }

  ul {
    display: flex;
    padding-top: ${px2rem(10)};
    flex-direction: column;
    position: absolute;
    z-index: 10;
    background: #fffc;
    visibility: hidden;
    border-radius: ${px2rem(5)};
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
`;
