// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4nJRgjXtIiGzNUGKuuuousx-Nlw3tLvg",
  authDomain: "moviegpt-42253.firebaseapp.com",
  projectId: "moviegpt-42253",
  storageBucket: "moviegpt-42253.appspot.com",
  messagingSenderId: "481929839069",
  appId: "1:481929839069:web:8abf927fdf79e26675f634",
  measurementId: "G-B0DS1DF04F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();