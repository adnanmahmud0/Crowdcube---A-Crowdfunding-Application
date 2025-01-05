// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfRsyzbwM40eBoC4vK3pkUwSMfYi3O9Cw",
    authDomain: "crowdcube-1b085.firebaseapp.com",
    projectId: "crowdcube-1b085",
    storageBucket: "crowdcube-1b085.firebasestorage.app",
    messagingSenderId: "674838174579",
    appId: "1:674838174579:web:d533f0be031a7ad8d80306"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);