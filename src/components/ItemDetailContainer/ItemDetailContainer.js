import React, { useState, useEffect, useContext } from "react";
import { Redirect, useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import Loader from "./../Loader";
import "./ItemDetailContainer.scss";
import { UIContext } from "../../context/UIContext";
import { getFirestore } from "../../firebase/firebaseConfig";

const ItemDetailContainer = () => {
  const { loading, setLoading } = useContext(UIContext);
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [error404, setError404] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("stock");
    const item = itemCollection.doc(itemId);
    setLoading(true);

    item
      .get()
      .then((doc) => {
        console.log(doc.exists);
        doc.exists ? setItem({ ...doc.data(), id: doc.id }) : setError404(true);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [itemId, setLoading]);

  return (
    <>
      {
        error404 ? 
          <Redirect to="/error404" />
        : 
          <div className="container itemDetailContainer">
            { loading ? <Loader /> : <ItemDetail {...item} />}
          </div>
      }
    </>
  );
};

export default ItemDetailContainer;
