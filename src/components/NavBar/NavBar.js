import React from "react";
import CartWidget from "./CartWidget";
import BrandNav from "./BrandNav";
import MenuNav from "./MenuNav";
import { Container, Navbar} from "react-bootstrap";

import './NavBar.scss'

const NavBar = () => {
  return (
    <header className = "header">
      <Navbar className = "navBar" bg="dark" variant="dark">
        <Container className = "contenedorNavBar">
          <BrandNav/>
          <MenuNav/>
          <CartWidget/>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;