import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail';
import Loader from './../Loader';
import getItems from './../../helpers/getItems';

import './ItemDetailContainer.scss'


const ItemDetailContainer = () => {

      const {itemId} = useParams();
      const [item, setItem] = useState(null);
      const [loading, setLoading] = useState(false);

      useEffect(() => {
            setLoading(true);

            getItems()
                  .then( res => {
                        const itemFound = res.find(product => product.id === parseInt(itemId));
                        setItem(itemFound);
                  })
                  .catch(err => console.log(err))
                  .finally(() => setLoading(false))   
      },[itemId])

      return (  
            <div className = "container itemDetailContainer">
                  { loading? <Loader/> : <ItemDetail {...item}/> }
            </div>
      );
}

export default ItemDetailContainer;