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
              <li><RedirectPage to={`/project/fachadas`}># FACHADAS</RedirectPage></li>
              <li><RedirectPage to={`/project/comerciais`}># PROJETOS COMERCIAIS</RedirectPage></li>
            </ul>
          </SubMenu>
          <SubMenu>
            <span># PROJETOS | INTERIORES</span>
            <ul>
              <li><RedirectPage to={`/project/gourmet`}># ÁREA GOURMET</RedirectPage></li>
              <li><RedirectPage to={`/project/banheiro`}># BANHEIRO</RedirectPage></li>
              <li><RedirectPage to={`/project/cozinha`}># COZINHA</RedirectPage></li>
              <li><RedirectPage to={`/project/lavabo`}># LAVABO</RedirectPage></li>
              <li><RedirectPage to={`/project/quarto`}># QUARTO</RedirectPage></li>
              <li><RedirectPage to={`/project/estar`}># SALA ESTAR</RedirectPage></li>
              <li><RedirectPage to={`/project/jantar`}># SALA JANTAR</RedirectPage></li>
            </ul>
          </SubMenu>
          <li><RedirectPage to="/contact"># CONTATO</RedirectPage></li>
        </ul>
      </NavigationBar>
    </Container>
  );
}
