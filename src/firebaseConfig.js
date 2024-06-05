/*eslint-disable*/
const script1 = document.createElement("script");
script1.src = "https://firebase.google.com/docs/web/setup#available-libraries";

const script2 = document.createElement("script");
script2.src = "https://www.gstatic.com/firebasejs/9.0.2/firebase-app-compat.js";

const script3 = document.createElement("script");
script3.src =
  "https://www.gstatic.com/firebasejs/9.0.2/firebase-database-compat.js";

document.head.appendChild(script1);
document.head.appendChild(script2);
document.head.appendChild(script3);

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
