import React, {useState} from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LOCAL_PATH, PATH_IMAGEN_STOCK } from "../../../utils/constants";
import ItemCounter from "../../ItemCounter/index";
import './ItemDetail.scss';

const ItemDetail = ({name, price, thumbnailUrl, description, category,stock }) => {

  const [amount, setAmount] = useState(1);

  const onAdd = () =>{
    console.log(
      {name,price,category,amount}
    );
  }

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
        <ItemCounter stock={stock} amount={amount} setAmount={setAmount} onAdd={onAdd}/>
      </div>
  );
};

export default ItemDetail;
