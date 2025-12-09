// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyD2NEgefAgJhGLXPbBohqTOSBxFTFMBG68",
    // authDomain: "eazybite-56032.firebaseapp.com",
    // projectId: "eazybite-56032",
    // databaseURL: "https://eazybite-56032-default-rtdb.asia-southeast1.firebasedatabase.app/",
    // storageBucket: "eazybite-56032.firebasestorage.app",
    // messagingSenderId: "202786362926",
    // appId: "1:202786362926:web:e4870d38b10290eaa271bf"

    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
