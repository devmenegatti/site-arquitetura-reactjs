import React from 'react';

import {
  Container,
  NavigationBar,
  RedirectPage,
  SubMenu
} from './styles';

import logo from '../../assets/images/logo-black.png';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="logo"/>
      <NavigationBar>
        <ul>
          <li><RedirectPage to="/"># HOME</RedirectPage></li>
          <li><RedirectPage to="/about"># SOBRE</RedirectPage></li>
          <SubMenu>
            <span># PROJETOS | ARQUITETONICOS</span>
            <ul>
              <li><RedirectPage to={`/project/1`}># ARQUITETONICO 01</RedirectPage></li>
              <li><RedirectPage to={`/project/2`}># ARQUITETONICO 02</RedirectPage></li>
              <li><RedirectPage to={`/project/3`}># ARQUITETONICO 03</RedirectPage></li>
              <li><RedirectPage to={`/project/4`}># ARQUITETONICO 04</RedirectPage></li>
              <li><RedirectPage to={`/project/5`}># ARQUITETONICO 05</RedirectPage></li>
            </ul>
          </SubMenu>
          <SubMenu>
            <span># PROJETOS | INTERIORES</span>
            <ul>
              <li><RedirectPage to={`/project/6`}># INTERIOR 01</RedirectPage></li>
              <li><RedirectPage to={`/project/7`}># INTERIOR 02</RedirectPage></li>
              <li><RedirectPage to={`/project/8`}># INTERIOR 03</RedirectPage></li>
              <li><RedirectPage to={`/project/9`}># INTERIOR 04</RedirectPage></li>
              <li><RedirectPage to={`/project/10`}># INTERIOR 05</RedirectPage></li>
            </ul>
          </SubMenu>
          <li><RedirectPage to="/contact"># CONTATO</RedirectPage></li>
        </ul>
      </NavigationBar>
    </Container>
  );
}
