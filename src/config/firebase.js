import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBKvywE673EQmETsya00wyQt4ItaIkHnN0",
    authDomain: "testing-chapter-10.firebaseapp.com",
    projectId: "testing-chapter-10",
    storageBucket: "testing-chapter-10.appspot.com",
    messagingSenderId: "112774187359",
    appId: "1:112774187359:web:17e9652935ba5b4941ceea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app