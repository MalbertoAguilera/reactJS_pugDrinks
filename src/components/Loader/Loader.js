import React from "react";
import './Loader.scss';
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="contenedorSpinner">
        <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="light" />
    </div>
  );
};

export default Loader;
