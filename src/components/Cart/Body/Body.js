import React, { useContext } from "react";
import Item from './Item'
import { Container, Row } from "react-bootstrap";
import { CartContext } from "../../../context/CartContext";
import "./Body.scss";

const Body = () => {

  const {cart, removeItem} = useContext(CartContext);

  return (
    <div className="cart-body">
      <Container>
        <Row className="my-2">
          {cart.map((producto) => (
            <Item key={producto.id} {...producto} removeItem={removeItem} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Body;