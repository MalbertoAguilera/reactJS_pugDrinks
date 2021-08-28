import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';

import './MenuNav.scss'


const MenuNav = () => {
      return (
      <Nav className="contenedorEnlaces">
            <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
                  <LinkContainer to="/category/gaseosas">
                        <NavDropdown.Item>Gaseosas</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/category/cervezas">
                        <NavDropdown.Item>Cervezas</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/category/vinos">
                        <NavDropdown.Item>Vinos</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/category/isotonicas">
                        <NavDropdown.Item>Isotonicas</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/category/aguas">
                        <NavDropdown.Item>Aguas</NavDropdown.Item>
                  </LinkContainer>
            </NavDropdown>
      </Nav>
      );
};

export default MenuNav;
