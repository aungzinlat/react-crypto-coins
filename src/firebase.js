// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHdSNkPRl7t4EfGOFu_UzMG2VoposRfWs",
  authDomain: "cryptobase-60aaa.firebaseapp.com",
  projectId: "cryptobase-60aaa",
  storageBucket: "cryptobase-60aaa.appspot.com",
  messagingSenderId: "418277132975",
  appId: "1:418277132975:web:1080589059df4c9a04225a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
