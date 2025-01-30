import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore"; // Import Firestore methods
import { getDatabase } from "firebase/database";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyAJ7rZD96MxIHQ7k4uwQgqaDpJsnKuhhJA",
  authDomain: "credsettlee.firebaseapp.com",
  projectId: "credsettlee",
  storageBucket: "credsettlee.appspot.com",
  messagingSenderId: "161160283985",
  appId: "1:161160283985:web:aac411ccdce55c909c3570",
  measurementId: "G-K488YV2V5N",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Export necessary Firebase services
export const auth = getAuth(app);   // Export authentication
export const db = getFirestore(app);  // Export Firestore
export const database = getDatabase(app); // Export Realtime Database

// Export collection method to use it in your app
export { getFirestore,collection };
