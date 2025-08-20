import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD8ElLdR2q3f9CYidCrm7XygpNartmjeNA",
  authDomain: "net-cafe-d81c9.firebaseapp.com",
  projectId: "net-cafe-d81c9",
  storageBucket: "net-cafe-d81c9.firebasestorage.app",
  messagingSenderId: "167642501320",
  appId: "1:167642501320:web:beedb42764e6f8084c15fd",
  measurementId: "G-V2XST4DS7L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };