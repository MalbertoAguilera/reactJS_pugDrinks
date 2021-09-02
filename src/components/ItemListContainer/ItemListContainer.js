import React, {useState, useEffect} from 'react';
import { useUIContext } from './../../context/UIContext';
import { useParams } from 'react-router-dom';
import Loader from '../Loader';
import getItems from '../../helpers/getItems';
import ItemList from './ItemList';


const ItemListContainer = () => {

      const {loading, setLoading} = useUIContext;
      console.log(useUIContext);
      console.log("estado Loading",loading);
      console.log("estado funcion setLoading",loading);
      debugger;
      const {catName} = useParams()
      const [data, setData] = useState([]);
      

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
                  .finally(()=> setLoading(false));
      },[catName])

      return (  
            <div className = "ContenedorItemListContainer">
                  {loading? <Loader/> : <ItemList stock={data}/>}
            </div>
      );
}

export default ItemListContainer;