import React from "react";
import "./FormCheckOut.scss";

const FormCheckOut = ({ handleSubmit, handleInputChange, values }) => {
  return (
    <div className="container-formCheckout">
      <div className="title-checkout">Checkout</div>
      <form className="formCheckout" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            type="text"
            value={values.name}
            onChange={handleInputChange}
            name="name"
            maxLength="20"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Apellido</label>
          <input
            id="lastName"
            type="text"
            value={values.lastName}
            onChange={handleInputChange}
            name="lastName"
            maxLength="20"
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Telefono</label>
          <input
            id="phone"
            type="text"
            value={values.phone}
            onChange={handleInputChange}
            name="phone"
            maxLength="12"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Correo Electronico</label>
          <input
            id="email"
            type="email"
            value={values.mail}
            onChange={handleInputChange}
            name="email"
            maxLength="40"
            required
          />
        </div>
        <div>
          <button className="form-submit" type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default FormCheckOut;
