import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhE5vIWILpKar14CwR0Deps-i42ezJEUk",
  authDomain: "bitcoin-tracker-17160.firebaseapp.com",
  projectId: "bitcoin-tracker-17160",
  storageBucket: "bitcoin-tracker-17160.appspot.com",
  messagingSenderId: "1012655145277",
  appId: "1:1012655145277:web:7492bd04a87b858b460554",
  measurementId: "G-JWE6FH9TQH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
