import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyAjbUklnTEE7315oD3Bj7k8pcLYBsJKgPc",
  authDomain: "teast-chat.firebaseapp.com",
  projectId: "teast-chat",
  storageBucket: "teast-chat.appspot.com",
  messagingSenderId: "980227571309",
  appId: "1:980227571309:web:c566e0b43d2796b72b8964",
  measurementId: "G-BF354PXC76"
});

export const Context = createContext(null);

const auth = getAuth(app);
const firestore = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{auth, firestore}}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);