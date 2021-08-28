import React from 'react';

const ItemCounter = ({stock, initial, onAdd}) => {

      return (  
            <div>
                  <button onClick = {onAdd}></button>
            </div>
      );
}
 
export default ItemCounter;