import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDY1hyXQpHk_9OPjYPA6tti7GsE8stpqQ0",
  authDomain: "ladies-shop-710f9.firebaseapp.com",
  projectId: "ladies-shop-710f9",
  storageBucket: "ladies-shop-710f9.appspot.com",
  messagingSenderId: "405928801704",
  appId: "1:405928801704:web:55943deaa707fc5eccd99d",
  measurementId: "G-JKCCHGRTPH",
  databaseURL: "https://ladies-shop-710f9-default-rtdb.europe-west1.firebasedatabase.app/",
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);

