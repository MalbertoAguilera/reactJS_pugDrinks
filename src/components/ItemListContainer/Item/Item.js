import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import './Item.scss'

const Item = ({ id, name, price, thumbnailUrl }) => {
  return (
    <Col xs={3} className="contenedorCard">
      <div className="subContenedorCard">
        <Card.Img
          className="imagen"
          variant="top"
          src={thumbnailUrl}
          alt={name}
        />
        <Card.Body className="cardBody">
          <Card.Title className="titulo">{name}</Card.Title>
          <Card.Text className="precio">${price}</Card.Text>
          <LinkContainer to={`/item/${id}`}>
            <Button className="botonCard">Ver mas...</Button>
          </LinkContainer>
        </Card.Body>
      </div>
    </Col>
  );
};

export default Item;
