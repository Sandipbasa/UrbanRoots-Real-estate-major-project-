// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

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
const auth = getAuth(app);
const storage = getStorage(app);

// Export as named exports
export { app, auth, storage };

// Also keep default export for backward compatibility
export default app;