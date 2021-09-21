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

    const db = getFirestore();
    const itemCollection = db.collection("stock");
    const filterProducts = catName ? itemCollection.where('category', '==' , catName) : itemCollection;
    
    setLoading(true);
    filterProducts.get()
      .then(response => {
        const data = response.docs.map(doc => ({...doc.data(), id: doc.id}));
        setData(data);
      })
      .catch(error => console.log(error))
      .finally(()=> setLoading(false));

  }, [catName, setLoading]);

  return (
    <div className="ContenedorItemListContainer">
      {loading ? <Loader /> : <ItemList stock={data} />}
    </div>
  );
};

export default ItemListContainer;
