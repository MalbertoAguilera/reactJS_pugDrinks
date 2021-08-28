import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LOCAL_PATH, PATH_IMAGEN_STOCK } from "../../../utils/constants";
import './ItemDetail.scss';

const ItemDetail = ({name, price, thumbnailUrl, description, category }) => {
  return (
      <div className="item-detail">
        <Card.Img
          className="item-detail__imagen"
          variant="top"
          src={`${LOCAL_PATH}/${PATH_IMAGEN_STOCK}/${thumbnailUrl}`}
        />
        <Card.Body className="item-detail__cardBody">
          <Card.Title className="item-detail__titulo">{name}</Card.Title>
          <Card.Text className="item-detail__precio">${price}</Card.Text>
          <Card.Text className="item-detail__description">{description}</Card.Text>
        </Card.Body>
        <Link className="btn btn-primary" to={`/category/${category}`}>Volver</Link>
      </div>
  );
};

export default ItemDetail;
