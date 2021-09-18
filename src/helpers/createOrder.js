import firebase from "firebase/app";
import  'firebase/firestore';
import { getFirestore } from '../firebase/firebaseConfig';

export const createOrder = (buyer, cart, totalOfCart) => {

      return new Promise ((resolve, reject) => {
            
            const db = getFirestore();
            const orders = db.collection("orders");
            const batch = db.batch();
            
            const newOrder = {
                  buyer: buyer,
                  items: cart,
                  total: totalOfCart(),
                  date: firebase.firestore.Timestamp.fromDate(new Date())
            }
      
            orders.add(newOrder)
                  .then(res => resolve(res.id))
                  .catch(error => reject (error));
      })

}