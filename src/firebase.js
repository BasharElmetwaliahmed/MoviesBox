/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhjU679zRkT5S_K_wkaEevu4KQsGZ3HP0",
  authDomain: "movies-app-86d47.firebaseapp.com",
  projectId: "movies-app-86d47",
  storageBucket: "movies-app-86d47.appspot.com",
  messagingSenderId: "602154766846",
  appId: "1:602154766846:web:808b951829c6fda71f70af",
  measurementId: "G-JXWLVK5WQT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);

