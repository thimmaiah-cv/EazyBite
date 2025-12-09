// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2NEgefAgJhGLXPbBohqTOSBxFTFMBG68",
    authDomain: "eazybite-56032.firebaseapp.com",
    projectId: "eazybite-56032",
    databaseURL: "https://eazybite-56032-default-rtdb.asia-southeast1.firebasedatabase.app/",
    storageBucket: "eazybite-56032.firebasestorage.app",
    messagingSenderId: "202786362926",
    appId: "1:202786362926:web:e4870d38b10290eaa271bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
