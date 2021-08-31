import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader';
import getItems from '../../helpers/getItems';
import ItemList from './ItemList';
import {CartContext} from './../../context/CartContext';

const ItemListContainer = () => {
      
      const contextObjectAPP = useContext(CartContext);
      console.log("Desde ItemListContainer, DEVUELVE UN OBJECT: ", contextObjectAPP);

      const {catName} = useParams()
      const [data, setData] = useState([]);
      const [loading, setLoading] = useState(false);

      useEffect(() => {
            setLoading(true);

            getItems()
                  .then( res =>{
                        if(catName){
                              const stockFiltered = res.filter(product => product.category === catName);
                              setData(stockFiltered);
                        } else {
                              setData(res);
                        }
                  })
                  .catch(err => console.log(err))
                  .finally(() => setLoading(false))
      },[catName])

      return (  
            <div className = "ContenedorItemListContainer">
                  { loading? <Loader/> : <ItemList stock={data}/> }
            </div>
      );
}

export default ItemListContainer;