import React, {useState} from 'react';
import './ItemCount.scss'

const ItemCount = ({initial, stock, onAdd}) => {

      const [count, setCount] = useState(initial)

      const handleIncreaseCount = () =>{
            count <= stock && setCount(count + 1);
      }
      
      const handleDecreaseCount = () =>{
            count > 1 && setCount(count - 1);
      }

      return (  
            <div className="container-counter my-2">
                  {stock?
                        (
                        <div className="counter-display">
                              <button className={"counter-display__plus-button"} onClick={handleDecreaseCount} disabled={count<=1 || stock <= 0}>-</button>
                              <span className="counter-display__counter">{count}</span>
                              <button className="counter-display__minus-button" onClick={handleIncreaseCount} disabled={count>= stock || stock <= 0}>+</button>
                        </div>
                        )
                        :<div className="counter-display__message">SIN STOCK</div>
                  }
                  <button className="container-counter__add-button"  onClick={()=>onAdd(count)} disabled={stock <= 0}>Agregar al carrito</button>
            </div>
      );
}

export default ItemCount;