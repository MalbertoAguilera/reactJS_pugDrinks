import React from "react";
import { Col } from "react-bootstrap";
import { FaWindowClose } from "react-icons/fa";
import "./Item.scss";

const Item = ({ id, name, price, quantity, thumbnailUrl, removeItem}) => {
  return (
    <>
      <Col xs={2} className="centrar-flex">
        <img src={thumbnailUrl} alt={name}/>
      </Col>
      <Col xs={5} className="centrar-flex">
        <div>{name}</div>
      </Col>
      <Col xs={2} className="centrar-flex">
        <div>Cantidad: {quantity}</div>
      </Col>
      <Col xs={1} className="centrar-flex">
        <div>${price}</div>
      </Col>
      <Col xs={1} className="centrar-flex">
        <FaWindowClose onClick={()=>removeItem(id)}/>
      </Col>
    </>
  );
};

export default Item;