// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAvu2KMcRte6WbvboVK83MuaEM1WnHEky8",
  authDomain: "iglant.firebaseapp.com",
  projectId: "iglant",
  storageBucket: "iglant.appspot.com",
  messagingSenderId: "743021614667",
  appId: "1:743021614667:web:d9c3a62f621c0da6329fce",
  measurementId: "G-GKS96V89JZ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const analytics = getAnalytics(app);
