// firebaseの初期化
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtYs-34BMOlZ4nZMBns9ho0JEh2XtHgwY",
  authDomain: "twitter-clone-749e9.firebaseapp.com",
  projectId: "twitter-clone-749e9",
  storageBucket: "twitter-clone-749e9.appspot.com",
  messagingSenderId: "97902764568",
  appId: "1:97902764568:web:ae742e4fceddd28169196d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
