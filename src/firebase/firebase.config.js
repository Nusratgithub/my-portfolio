// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtBYHnmsbVsFftMENp1XJlizxbK-_Zn_Q",
  authDomain: "my-portfolio-1e37c.firebaseapp.com",
  projectId: "my-portfolio-1e37c",
  storageBucket: "my-portfolio-1e37c.appspot.com",
  messagingSenderId: "62983860249",
  appId: "1:62983860249:web:2b4a43a75b78b40f467a88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;