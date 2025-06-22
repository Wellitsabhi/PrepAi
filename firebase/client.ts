// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPVPBgkDnCUfGzfa4akTnld-NnqbLrAgc",
  authDomain: "prepai-ae19f.firebaseapp.com",
  projectId: "prepai-ae19f",
  storageBucket: "prepai-ae19f.firebasestorage.app",
  messagingSenderId: "846737505456",
  appId: "1:846737505456:web:c5e939ba910a628de8cf75",
  measurementId: "G-P33KNRJMZG"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);