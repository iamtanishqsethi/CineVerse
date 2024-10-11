// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDrU2NZhA0A1N2uBqNzIJ5Xx5VhrQlih1w",
    authDomain: "cineverse-d6ec2.firebaseapp.com",
    projectId: "cineverse-d6ec2",
    storageBucket: "cineverse-d6ec2.appspot.com",
    messagingSenderId: "303270598819",
    appId: "1:303270598819:web:97c8c9d7d09daca55e4716",
    measurementId: "G-CYKHNQ0G8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();//same auth for everywhere