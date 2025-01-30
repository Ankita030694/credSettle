import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAJ7rZD96MxIHQ7k4uwQgqaDpJsnKuhhJA",
  authDomain: "credsettlee.firebaseapp.com",
  projectId: "credsettlee",
  storageBucket: "credsettlee.appspot.com", // Corrected this line
  messagingSenderId: "161160283985",
  appId: "1:161160283985:web:aac411ccdce55c909c3570",
  measurementId: "G-K488YV2V5N",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;