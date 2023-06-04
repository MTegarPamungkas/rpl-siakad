import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD9f3xtsw1j0JEqJqoOZvwmtqbOVP7sd7k",
  authDomain: "rpl-siakad.firebaseapp.com",
  projectId: "rpl-siakad",
  storageBucket: "rpl-siakad.appspot.com",
  messagingSenderId: "106420963869",
  appId: "1:106420963869:web:1b149446642517c29e54f4",
  measurementId: "G-4YGNR7DWRR"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { db, auth };
