import React from 'react';

const ItemDetail = ({id, name, category, price, thumbnailUrl}) => {
      return (  
            <div>
                  <p>{id}</p>
                  <p>{name}</p>
                  <p>{thumbnailUrl}</p>
                  <p>{price}</p>
            </div>
      );
}

export default ItemDetail;