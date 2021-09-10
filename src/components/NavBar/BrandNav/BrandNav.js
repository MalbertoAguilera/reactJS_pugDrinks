import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import pathLogo from "../../../assets/img/logo.png";

import "./BrandNav.scss";

const BrandNav = () => {
  return (
    <Link to="/">
      <Navbar.Brand className="contenedorLogo">
        <img className="imagenLogo" src={pathLogo} alt="Logo" />
        <div className="contenedorTitulo">
          <h1 className="tituloLogo">Pug Drinks</h1>
        </div>
      </Navbar.Brand>
    </Link>
  );
};

export default BrandNav;
