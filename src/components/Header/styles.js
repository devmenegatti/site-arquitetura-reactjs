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
    flex-wrap: wrap;
    justify-content: flex-end;
    margin-left: 30px;

    li {
      list-style: none;
      padding: 5px 15px;
      font-family: 'Courier New', Courier, monospace;
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
    flex-direction: column;
    position: absolute;
    background: #fffc;
    visibility: hidden;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
`;
