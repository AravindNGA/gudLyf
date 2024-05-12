import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRQlu6hNC1QQoKEvC9ww_9Fzdw6-2u8k8",
  authDomain: "tesst-dc862.firebaseapp.com",
  databaseURL: "https://tesst-dc862.firebaseio.com",
  projectId: "tesst-dc862",
  storageBucket: "tesst-dc862.appspot.com",
  messagingSenderId: "84061306697",
  appId: "1:84061306697:web:e28bdb2fde9b8014a72498",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authGGl = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
export const dbName = "BatteryUsersDB";
export { authGGl, provider, db };
