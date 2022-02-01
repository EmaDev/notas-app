import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA1JnxXp_bumuTHSkkKchBOwnLwhGKXmoQ",
    authDomain: "notas-app-fdb45.firebaseapp.com",
    projectId: "notas-app-fdb45",
    storageBucket: "notas-app-fdb45.appspot.com",
    messagingSenderId: "200558918911",
    appId: "1:200558918911:web:3889165f65650340a220ca"
  };

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;