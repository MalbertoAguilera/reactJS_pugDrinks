import React, { useContext, useState } from "react";
import { Redirect } from "react-router";
import { CartContext } from "../../context/CartContext";
import { createOrder } from "../../helpers/createOrder";
import FormCheckOut from "./FormCheckOut";

const Checkout = () => {
  
  const { cart, totalOfCart, clear } = useContext(CartContext);

  const [values, setValues] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(values.name.length > 3 && values.email.length > 3 && values.phone.length > 5){
      createOrder(values, cart, totalOfCart)
        .then( res => {
          alert(res);
          clear()
        });
        
    } else {
      alert("Campos invalidos");
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <hr/>
      {!cart.length ? (
        <Redirect to="/"/>
      ) : (
        <>
          <FormCheckOut
            values={values}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </>
      )}
    </div>
  );
};

export default Checkout;
