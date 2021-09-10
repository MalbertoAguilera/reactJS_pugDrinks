import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import ItemList from "./ItemList";
import { UIContext } from "../../context/UIContext";
import { getFirestore } from "../../firebase/firebaseConfig";

const ItemListContainer = () => {
  const { loading, setLoading } = useContext(UIContext);
  const { catName } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("stock");

    if(catName){
      const filter = itemCollection.where('category', '==' , catName);
      filter.get()
        .then(response => {
          const data = response.docs.map(doc => ({...doc.data(), id: doc.id}));
          setData(data);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
      
    } else {
      itemCollection.get()
        .then(response => {
          const data = response.docs.map( doc => ({...doc.data(), id: doc.id}));
          setData(data);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }

    // getItems()
    //       .then( res =>{
    //             if(catName){
    //                   const stockFiltered = res.filter(product => product.category === catName);
    //                   setData(stockFiltered);
    //             } else {
    //                   setData(res);
    //             }
    //       })
    //       .catch(err => console.log(err))
    //       .finally(()=> setLoading(false));
  }, [catName, setLoading]);

  return (
    <div className="ContenedorItemListContainer">
      {loading ? <Loader /> : <ItemList stock={data} />}
    </div>
  );
};

export default ItemListContainer;
