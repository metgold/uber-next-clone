// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { GoogleAuthProvider, getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrA2huKBeDohqISzWEVHNUFZvVm8bKxt4",
  authDomain: "uber-next-clone-9c078.firebaseapp.com",
  projectId: "uber-next-clone-9c078",
  storageBucket: "uber-next-clone-9c078.appspot.com",
  messagingSenderId: "967062167987",
  appId: "1:967062167987:web:3b0e857ae0d284952b2bc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app, provider, auth}