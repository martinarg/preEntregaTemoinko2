 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  import {getFirestore} from 'firebase/firestore';
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBro1RlwtHxW2tgGzdbkBRMh32VEVChkz8",
    authDomain: "react-trophy.firebaseapp.com",
    projectId: "react-trophy",
    storageBucket: "react-trophy.appspot.com",
    messagingSenderId: "789552325623",
    appId: "1:789552325623:web:d10036e3c4cabc33bc04f2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //inicializo mi db con la config de firestore
  export const db = getFirestore(app);