import React from 'react';
import {Container, Row} from 'react-bootstrap'
import Item from '../Item'

const ItemList = ({stock}) => {
      return(
            <Container>
                  <Row className="my-2">
                        {stock.map((producto) => <Item key={producto.id} {...producto}/>)}
                  </Row>
            </Container>
      );
}

export default ItemList;