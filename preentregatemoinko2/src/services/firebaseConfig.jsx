 // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  import {getFirestore} from 'firebase/firestore';
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: process.env.React_APP__API_KEY,
    authDomain:  process.env.React_APP__AUTH_DOMAIN,
    projectId: process.env.React_APP__PROYECTID,
    storageBucket: process.env.React_APP__STORAGR_BUCKET,
    messagingSenderId: process.env.React_APP__MESSAGING_SENDER_ID,
    appId: process.env.React_APP__APP_ID
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //inicializo mi db con la config de firestore
  export const db = getFirestore(app);
