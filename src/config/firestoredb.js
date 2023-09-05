import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyC6f9Mu4L-Ni5nDqCJlIEgbCXArUGa1w94",
  authDomain: "shoppinglist-4e44a.firebaseapp.com",
  projectId: "shoppinglist-4e44a",
  storageBucket: "shoppinglist-4e44a.appspot.com",
  messagingSenderId: "539391962198",
  appId: "1:539391962198:web:16a9b7c1cf913447a81ff7",
  measurementId: "G-2S48QYMM2T"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app)
