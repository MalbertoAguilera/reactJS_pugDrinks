import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail';
import Loader from './../Loader';
import getItems from './../../helpers/getItems';

import './ItemDetailContainer.scss'
import { UIContext } from '../../context/UIContext';



const ItemDetailContainer = () => {

      const {loading, setLoading} = useContext(UIContext);
      const {itemId} = useParams();
      const [item, setItem] = useState(null);

      useEffect(() => {
            setLoading(true);

            getItems()
                  .then( res => {
                        const itemFound = res.find(product => product.id === parseInt(itemId));
                        setItem(itemFound);
                  })
                  .catch(err => console.log(err))
                  .finally(() => setLoading(false))   
      },[itemId, setLoading])

      return (  
            <div className = "container itemDetailContainer">
                  { loading? <Loader/> : <ItemDetail {...item}/> }
            </div>
      );
}

export default ItemDetailContainer;