import React, { useContext, useState } from "react";
import { Redirect } from "react-router";
import { CartContext } from "../../context/CartContext";
import { createOrder } from "../../helpers/createOrder";
import FormCheckOut from "./FormCheckOut";
import Swal from 'sweetalert2';

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
          Swal.fire({
            icon: 'success',
            title: 'Su compra fue registrada!',
            text: `Guarde este identificador: ${res}`,
            confirmButtonText: 'Finalizado'
        })
          clear()
        })
        .catch(error => {
          console.log(error);
          alert(`ERROR : sin stock`);
          clear();
        } );

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
