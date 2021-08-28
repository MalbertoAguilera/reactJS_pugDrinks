import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader';
import getItems from '../../helpers/getItems';
import ItemList from './ItemList';

const ItemListContainer = () => {

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