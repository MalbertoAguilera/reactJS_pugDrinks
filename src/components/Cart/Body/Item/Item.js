import React from "react";
import { Col } from "react-bootstrap";
import { FaWindowClose } from "react-icons/fa";
import { LOCAL_PATH, PATH_IMAGEN_STOCK } from "../../../../utils/constants";
import "./Item.scss";

const Item = ({ id, name, price, quantity, thumbnailUrl, removeItem}) => {
  return (
    <>
      <Col xs={4} className="centrar-flex">
        <img src={`${LOCAL_PATH}/${PATH_IMAGEN_STOCK}/${thumbnailUrl}`} alt={name} />
      </Col>
      <Col xs={4} className="centrar-flex">
        <div>{name}</div>
      </Col>
      <Col xs={1} className="centrar-flex">
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
