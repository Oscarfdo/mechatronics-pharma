// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtZGkyFm5d4I0szAJEMsGTjkDZnF2qG1k",
  authDomain: "mechatronics-pharma.firebaseapp.com",
  projectId: "mechatronics-pharma",
  storageBucket: "mechatronics-pharma.appspot.com",
  messagingSenderId: "203682962542",
  appId: "1:203682962542:web:4105891ffb8d0bbba1da7f",
  measurementId: "G-PRC0G2TWED"
};

// Initialize Firebase
export const Firebaseapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const FirebaseAuth = getAuth(Firebaseapp);
export const FirebaseDB = getFirestore(Firebaseapp);