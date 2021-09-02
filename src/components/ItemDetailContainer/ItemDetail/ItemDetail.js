import React, {useContext, useState} from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { LOCAL_PATH, PATH_IMAGEN_STOCK } from "../../../utils/constants";
import ItemCounter from "../../ItemCounter/index";
import './ItemDetail.scss';

const ItemDetail = ({id,name, price, thumbnailUrl, description, category, stock}) => {

  // const {carrito, setCarrito} = useContext(CartContext);
  
  //   const onAdd = () =>{
  //     const newItem = {name,price,category,amount};
  //     setCarrito([...carrito, newItem]);
  // }

  const {addOnCart} = useContext(CartContext);
  const [amount, setAmount] = useState(1);

  const handleOnAdd = () =>{
    const newItem = {id,name,price,category,amount};
    addOnCart(newItem);
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
        <ItemCounter stock={stock} amount={amount} setAmount={setAmount} handleOnAdd={handleOnAdd}/>
        <Link className="btn btn-primary" to={`/category/${category}`}>Volver</Link>
      </div>
  );
};

export default ItemDetail;
