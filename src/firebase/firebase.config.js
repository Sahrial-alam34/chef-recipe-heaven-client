/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiEQDZ2H_sKe0i2r5FBdJiJBE0y45Y6RE",
  authDomain: "chef-recipe-hunter-36b56.firebaseapp.com",
  projectId: "chef-recipe-hunter-36b56",
  storageBucket: "chef-recipe-hunter-36b56.appspot.com",
  messagingSenderId: "700493354739",
  appId: "1:700493354739:web:b5927143055e2bd0f10986"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;