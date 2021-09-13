import React, { useContext } from "react";
import Item from './Item/Item'
import { Container, Row } from "react-bootstrap";
import "./Body.scss";
import { CartContext } from "../../../context/CartContext";

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
