import React from "react";
import './Loader.scss';

const Loader = () => {
  return (
    <div className="contenedorSpinner">
      <div className="spinner-border text-warning" role="status"></div>
    </div>
  );
};

export default Loader;
