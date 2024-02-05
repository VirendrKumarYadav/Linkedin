import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA08h5bk7mvYp0PL2hLpVH7RuLbvjR9t08",
  authDomain: "loginpage-40d5c.firebaseapp.com",
  projectId: "loginpage-40d5c",
  storageBucket: "loginpage-40d5c.appspot.com",
  messagingSenderId: "1055013894832",
  appId: "1:1055013894832:web:8ebe4482428556a8171975",
  measurementId: "G-8QX001H079",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
