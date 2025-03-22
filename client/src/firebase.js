// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-3937a.firebaseapp.com",
  projectId: "real-estate-3937a",
  storageBucket: "real-estate-3937a.firebasestorage.app",
  messagingSenderId: "91776599959",
  appId: "1:91776599959:web:bd88e94dc91f3da184e6d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;