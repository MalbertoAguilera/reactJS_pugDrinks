import firebase from "firebase/app";
import  'firebase/firestore';
import { getFirestore } from '../firebase/firebaseConfig';

export const createOrder = (buyer, cart, totalOfCart) => {

      return new Promise (async (resolve, reject) => {
            
            const db = getFirestore();
            const orders = db.collection("orders");
            const newOrder = {
                  buyer: buyer,
                  items: cart,
                  total: totalOfCart(),
                  date: firebase.firestore.Timestamp.fromDate(new Date())
            }
            const itemsToUpdate = db.collection("stock")
                                    .where(firebase.firestore.FieldPath.documentId(), "in" , cart.map( item => item.id));
            const batch = db.batch();
            const outOfStock= [];
            const query = await itemsToUpdate.get()

            query.docs.forEach(doc => {
                  const itemInCart = cart.find ( item => item.id === doc.id);
                  if(doc.data().stock >= itemInCart.quantity){
                        batch.update(doc.ref, {stock: doc.data().stock - itemInCart.quantity})
                  } else {
                        outOfStock.push({ id: doc.id, ...doc.data()});
                  }
            });

            if(outOfStock.length === 0){
                  orders.add(newOrder)
                        .then(res => {
                              batch.commit();
                              resolve(res.id);
                        })
                        .catch(error => reject (error));
            } else {
                  reject(outOfStock);
            }            
      })
}