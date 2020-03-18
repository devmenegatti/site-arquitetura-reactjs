import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  border-bottom: 1px solid #ccc;

  img {
    max-height: 75px;
  }
`;

export const NavigationBar = styled.nav`
  flex: 1;
  ul {
    display: flex;
    justify-content: space-evenly;

    li {
      list-style: none;
      margin-left: 25px;
      font-family: 'Courier New', Courier, monospace;
    }
  }
`;

export const RedirectPage = styled(Link)`
  text-decoration: none;
  color: #666;
  font-size: 11px;
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
  }
  span {
    text-decoration: none;
    color: #666;
    font-size: 11px;
    transition: color 0.2s;
    white-space: nowrap;
    &:hover {
      color: #333;
      font-weight: bold;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    position: absolute;
    background: #fffa;
    visibility: hidden;
  }
`;
