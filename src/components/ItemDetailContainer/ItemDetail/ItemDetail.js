import React, {useContext, useState} from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { LOCAL_PATH, PATH_IMAGEN_STOCK } from "../../../utils/constants";
import ItemCount from "../../ItemCount";
import './ItemDetail.scss';

const ItemDetail = ({id,name, price, thumbnailUrl, description, category, stock}) => {

  const {addItem} = useContext(CartContext);
  const [enableBuy, setEnableBuy] = useState(true);

  const onAdd = (quantity) =>{
    const newItem = {id,name,price,category};
    addItem(newItem, quantity);
    setEnableBuy(false);
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

        <div className="item-detail__buttons">
          {
            enableBuy
            ?<ItemCount initial={1} stock={stock} onAdd={onAdd}/>
            :<div className="my-2"><Link className="btn buttons__finish-buy" to="/cart"> Finalizar Compra</Link></div>
          }
          <div className="my-3"><Link className="btn buttons__go-back" to={"/"}>Volver</Link></div>
        </div>
        
      </div>
  );
};

export default ItemDetail;
