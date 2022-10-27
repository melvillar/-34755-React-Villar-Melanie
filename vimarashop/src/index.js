import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpBwZzFu2vMp4IGnGtfDBfEJDmkt2C6rw",
  authDomain: "vimarashop.firebaseapp.com",
  projectId: "vimarashop",
  storageBucket: "vimarashop.appspot.com",
  messagingSenderId: "497287276094",
  appId: "1:497287276094:web:f172e891386e3316ea536f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);


