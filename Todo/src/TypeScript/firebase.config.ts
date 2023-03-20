// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDD9-34cSPN5AMnIFGtSGJb5EiDeZn_0EU",
  authDomain: "todolist-fb9a7.firebaseapp.com",
  projectId: "todolist-fb9a7",
  storageBucket: "todolist-fb9a7.appspot.com",
  messagingSenderId: "641792419023",
  appId: "1:641792419023:web:b18374c4ca5891806343ba",
  measurementId: "G-TXPDSHSFL6",
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

