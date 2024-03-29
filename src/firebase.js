// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import { collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_HJQv9RIqv5wyxvj2lkj5HwxemxJd2Ss",
  authDomain: "gauchitoteca.firebaseapp.com",
  projectId: "gauchitoteca",
  storageBucket: "gauchitoteca.appspot.com",
  messagingSenderId: "335825818089",
  appId: "1:335825818089:web:9ce2ca0a11713b5653fb78",
  measurementId: "G-8BQ7XHKJ22",
};

//Initialize Firebase
export const app = initializeApp(firebaseConfig);

//Firestore
export const db = getFirestore(app);
export const pedidosCollectionRef = collection(db, "pedidos");
export const audiosCollectionRef = collection(db, "audios");
export const imagenesCollectionRef = collection(db, "imagenes");

//Storage
export const storage = getStorage();

//Auth
export const auth = getAuth(app);

//Analitics
const analytics = getAnalytics(app);
