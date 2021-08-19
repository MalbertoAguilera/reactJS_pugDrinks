import React from 'react'
import { Col, Card, Button } from 'react-bootstrap';
// import {LOCAL_PATH, PATH_IMAGEN_STOCK} from '../../../../utils/constants';

const Item = ({id, nombre, tipo, precio, stock, thumbnailUrl}) => {


      return(
            <Col xs = {3} className = "contenedorCard">
                  <Card.Img className ="imagen" variant = "top" src = "https://picsum.photos/100?random=1"/>
                  <Card.Body className ="cardBody">
                        <Card.Title className ="titulo">{nombre}</Card.Title>
                        <Card.Text className ="precio">${precio}</Card.Text>
                        <Button className ="botonCard">Añadir al carrito</Button>
                  </Card.Body>
            </Col>   
      );
}

export default Item;