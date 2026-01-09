import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAzWT4789LBJ54p4UtKpMPA3o92Nymieqw",
  authDomain: "coluna-de-fogo-37bd1.firebaseapp.com",
  projectId: "coluna-de-fogo-37bd1",
  storageBucket: "coluna-de-fogo-37bd1.firebasestorage.app",
  messagingSenderId: "1001058985927",
  appId: "1:1001058985927:web:33dc30550f301cf3839be2"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);