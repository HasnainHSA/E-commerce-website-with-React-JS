// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC31s3cb6vEX1ivyLJhNrD9NE2sjNO9lcE",
    authDomain: "ecommerce-website-98213.firebaseapp.com",
    projectId: "ecommerce-website-98213",
    storageBucket: "ecommerce-website-98213.appspot.com",
    messagingSenderId: "727894325691",
    appId: "1:727894325691:web:d0810f45d2084c8715ac9e",
    measurementId: "G-5YTT8EYRL9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
