import React from "react";
import Item from './Item/Item'
import { Container, Row } from "react-bootstrap";
import "./Body.scss";

const Body = ({cart, removeItem}) => {
      console.log(cart);
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
