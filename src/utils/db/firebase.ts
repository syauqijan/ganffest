// Import the functions you need from the SDKs you need
import { FirebaseApp, getApps, initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import { getDatabase } from "firebase/database";
import firebase from 'firebase/app'
import 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAINE,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Initialize Fireexport 
// const app = initializeApp(firebaseConfig);
// export default app;

const apps = getApps();
let app: FirebaseApp;

if (!apps.length) {
  app = initializeApp(firebaseConfig);
} else {
  app = apps[0];
}

export default app;

// const apps = getApps();
//   let firebaseApp = null;
//   if (!apps.length) {
//     firebaseApp = initializeApp(firebaseConfig);
//   }
//   else {
//     firebaseApp = apps[0];
//   }
// export default firebaseApp;




// if(!getApps().length){
//   initializeApp(firebaseConfig);
// }

// export const FirebaseAuth = getAuth();

// export const SignUp = async (email: string, password: string) => {
//   await createUserWithEmailAndPassword(FirebaseAuth, email, password);
// }

// export const SignIn = async (email: string, password: string) => {
//   await signInWithEmailAndPassword(FirebaseAuth, email, password);
// }

// export  const SignOut = async () => {
//   await signOut(FirebaseAuth);
// }
