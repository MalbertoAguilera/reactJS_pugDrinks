import firebase from "firebase/app";
import  'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDmhRDEcmHFsDXK84xrKAgxf86rqJuICWE",
  authDomain: "pug-drinks-react.firebaseapp.com",
  projectId: "pug-drinks-react",
  storageBucket: "pug-drinks-react.appspot.com",
  messagingSenderId: "997658094238",
  appId: "1:997658094238:web:62c3ac004cff95d27da98f"
};

// CONFIGURACION PARA PROTEGER MIS DATOS EN ENV.LOCAL
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// };

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => {
    return app
}

export const getFirestore = () => {
    return firebase.firestore(app)
}