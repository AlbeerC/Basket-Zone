// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVZuiwVhZyeUVtCNkZNWYNsOuu-XB4CV4",
  authDomain: "backend-basketzone.firebaseapp.com",
  projectId: "backend-basketzone",
  storageBucket: "backend-basketzone.appspot.com",
  messagingSenderId: "700915533003",
  appId: "1:700915533003:web:60f08fe5353aba7325074e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)