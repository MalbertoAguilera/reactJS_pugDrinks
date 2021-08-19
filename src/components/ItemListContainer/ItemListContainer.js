import React, {useState, useEffect} from 'react';
import Loader from '../Loader'
import cargarDatos from '../../helpers/cargarDatos';
import stock from '../../db/stock.json';
import ItemList from './ItemList';

const ItemListContainer = () => {

      const [data, setData] = useState([]);
      const [loading, setLoading] = useState(false);

      useEffect(() => {

            setLoading(true);
            cargarDatos(stock)
                  .then( res => setData(res))
                  .finally(() => setLoading(false))   
      },[])

      return (  
            <div className = "ContenedorItemListContainer">
                  {
                        loading? 
                        <Loader/>
                        :
                        <ItemList stock={data}/>
                  }
            </div>
      );
}

export default ItemListContainer;