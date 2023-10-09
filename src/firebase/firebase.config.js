// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

console.log( "inside firebase config", import.meta.env.VITE_PASS)

const firebaseConfig = {
  apiKey:import.meta.env.VITE_APIKEY,
  authDomain: "react-dragon-newspaper-4efe8.firebaseapp.com",
  projectId: "react-dragon-newspaper-4efe8",
  storageBucket: "react-dragon-newspaper-4efe8.appspot.com",
  messagingSenderId: "963943370054",
  appId: "1:963943370054:web:9594c5fac8f520fd02e947"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;