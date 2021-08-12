import React from "react";
import CartWidget from "../CartWidget";
import { Container, Navbar, Nav } from "react-bootstrap";
import pathLogo from "../../assets/img/logo.png";

const NavBar = () => {
  return (
    <header className = "header">
      <Navbar className = "navBar" bg="dark" variant="dark">
        <Container className = "contenedorNavBar">
          <LogoNav />
          <MenuNav />
          <CartWidget/>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;

const LogoNav = () => {
  return (
    <Navbar.Brand className="contenedorLogo" href="#">
      <img className="imagenLogo" src={pathLogo} alt="Logo" />
      <div className="contenedorTitulo">
        <h1 className="tituloLogo">Pug Drinks</h1>
      </div>
    </Navbar.Brand>
  );
};

const MenuNav = () => {
  return (
    <Nav className = "contenedorEnlaces">
      <Nav.Link href="#link1">Link1</Nav.Link>
      <Nav.Link href="#link2">Link2</Nav.Link>
      <Nav.Link href="#link3">Link3</Nav.Link>
    </Nav>
  );
};
