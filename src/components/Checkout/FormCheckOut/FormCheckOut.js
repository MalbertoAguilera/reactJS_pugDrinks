import React from "react";
import "./FormCheckOut.scss";

const FormCheckOut = ({ handleSubmit, handleInputChange, values }) => {
  
  const {name, phone, email, confirmEmail, lastName} = values
  const isValidated = !(
                        name.length > 3 &&
                        lastName.length > 3 &&
                        phone.length > 5 &&
                        email.length >1 &&
                        confirmEmail.length >1 &&
                        (email === confirmEmail)
                      );

  return (
    <div className="container-formCheckout">
      <div className="title-checkout">Checkout</div>
      <form className="formCheckout" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            type="text"
            value={name}
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
            value={lastName}
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
            value={phone}
            onChange={handleInputChange}
            name="phone"
            maxLength="14"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Correo Electronico</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={handleInputChange}
            name="email"
            autoComplete="off"
            maxLength="40"
            required
          />
        </div>
        <div>
          <label htmlFor="email2">Repetir Contraseña</label>
          <input
            id="confirmEmail"
            type="email"
            value={confirmEmail}
            onChange={handleInputChange}
            name="confirmEmail"
            maxLength="40"
            autoComplete="off"
            placeholder="Prohibido copiar y pegar"
            required
          />
        </div>
        <div>
          <button 
                  disabled ={isValidated} 
                  className="btn form-submit" 
                  type="submit">REALIZAR COMPRA</button>
        </div>
      </form>
    </div>
  );
};

export default FormCheckOut;
