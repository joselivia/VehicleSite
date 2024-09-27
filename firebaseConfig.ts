import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBqZtYRUw1L0NUwbw5vQzKt22mwC0H5F1A",
  authDomain: "dave-6ba97.firebaseapp.com",
  databaseURL: "https://dave-6ba97-default-rtdb.firebaseio.com/",
  projectId: "dave-6ba97",
  storageBucket: "dave-6ba97.appspot.com",
  messagingSenderId: "663683236672",
  appId: "1:663683236672:web:4b7d19e207e118da0df0a5",
  measurementId: "G-NVHPHQ2T1L"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export {db}