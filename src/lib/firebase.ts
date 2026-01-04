import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCLkLUIBKgi99nKKtPO28KF-qVqfLs90wo",
  authDomain: "my-portfolio-e240a.firebaseapp.com",
  projectId: "my-portfolio-e240a",
  storageBucket: "my-portfolio-e240a.firebasestorage.app",
  messagingSenderId: "470058553778",
  appId: "1:470058553778:web:0a0f9f3311b49e7c9314ab",
  measurementId: "G-HXBT2XBM66"
};

// Initialize Firebase only once
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export { app, db };
