import React, {useState, useEffect} from 'react';
import cargarDatos from '../../helpers/cargarDatos';
import stock from '../../db/stock.json';

const ItemListContainer = () => {

      const [data, setData] = useState('sin stock');
      const [loading, setLoading] = useState(false);

      useEffect(() => {

            setLoading(true);
            cargarDatos(stock)
                  .then( res => setData(res))
                  .finally(setLoading(false));    
      }, [])

      return (  
            <div className = "ContenedorItemListContainer">
                  {
                        loading ? "loading..."
                        :
                        <p>{JSON.stringify(data)}</p>
                  }
            </div>
      );
}

export default ItemListContainer;