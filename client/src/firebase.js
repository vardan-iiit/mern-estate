// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fcs-project-5f73a.firebaseapp.com",
  projectId: "fcs-project-5f73a",
  storageBucket: "fcs-project-5f73a.appspot.com",
  messagingSenderId: "509525645628",
  appId: "1:509525645628:web:acdbf8401c9906bbfae639"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);