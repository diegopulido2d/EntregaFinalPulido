// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeLiEn5Bdl_etH16sk_SlG0RSr-fLgA2o",
  authDomain: "cannapp-bec68.firebaseapp.com",
  projectId: "cannapp-bec68",
  storageBucket: "cannapp-bec68.appspot.com",
  messagingSenderId: "1011848422746",
  appId: "1:1011848422746:web:401ce2bedd8a0136b97f63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);