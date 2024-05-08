// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA032XkaEUy8q0Kt_p2Y62CXbPI79pmqc",
  authDomain: "auth-login-register-2.firebaseapp.com",
  projectId: "auth-login-register-2",
  storageBucket: "auth-login-register-2.appspot.com",
  messagingSenderId: "459547334844",
  appId: "1:459547334844:web:bce15447a11f37a6c9d8b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;