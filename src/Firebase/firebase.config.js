// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbLMfwVb2Oc8R0vOTyv1Qb2qczIWE-mo4",
  authDomain: "assignment-10-ea7c5.firebaseapp.com",
  projectId: "assignment-10-ea7c5",
  storageBucket: "assignment-10-ea7c5.appspot.com",
  messagingSenderId: "313831093087",
  appId: "1:313831093087:web:3fae52a08889f15de47cea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

export default auth;