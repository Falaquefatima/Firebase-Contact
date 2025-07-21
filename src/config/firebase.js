// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu-p9qWwt-DAuW9b0dnHEK3QC_YNwhY5k",
  authDomain: "vite-contact-4ee53.firebaseapp.com",
  projectId: "vite-contact-4ee53",
  storageBucket: "vite-contact-4ee53.firebasestorage.app",
  messagingSenderId: "1060897753365",
  appId: "1:1060897753365:web:e55c3e14fd085058d2011c",
  measurementId: "G-BSB02VBGKQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);
export const analytics = getAnalytics(app);