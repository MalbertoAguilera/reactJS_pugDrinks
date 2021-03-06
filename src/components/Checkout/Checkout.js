import React, { useContext, useState } from "react";
import { Redirect } from "react-router";
import { CartContext } from "../../context/CartContext";
import { createOrder } from "../../firebase/createOrder";
import FormCheckOut from "./FormCheckOut";
import Swal from "sweetalert2";
import confirm from "../../assets/img/confirm.png";
import "./Checkout.scss";

const Checkout = () => {

  const { cart, totalOfCart, clear } = useContext(CartContext);
  const [values, setValues] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    confirmEmail: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createOrder(values, cart, totalOfCart)
      .then((res) => {
        
        Swal.fire({
          imageUrl: `${confirm}`,
          imageWidth: 300,
          imageHeight: 300,
          imageAlt: "Pug Image",
          title: "Su compra fue registrada!",
          text: `Guarde este identificador: ${res}`,
          confirmButtonText: "Finalizado",
        });
        clear();
      })
      .catch((outOfStock) => {
        const filterName = outOfStock.map(item => item.name);
        const message = filterName.join('\n');

        Swal.fire({
          icon: 'error',
          title: 'El stock de los siguientes productos no se encuentra disponible',
          text: `${message}`,
          footer: 'GENERE LA ORDEN NUEVAMENTE'
        })
        clear();
      });
  };

  return (
    <div className="container container-checkout">
      {!cart.length ? (
        <Redirect to="/" />
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
