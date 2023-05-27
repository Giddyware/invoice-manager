// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { EmailAuthProvider, getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDQcaGg-6jPnRkOPNVclzKWEdvKIwv7KTM",
  authDomain: "invoice-management-99fad.firebaseapp.com",
  projectId: "invoice-management-99fad",
  storageBucket: "invoice-management-99fad.appspot.com",
  messagingSenderId: "939160055564",
  appId: "1:939160055564:web:4e5067a7fe0c6009c82329",
  measurementId: "G-SRRTD1PN6H",
};

// Initialize Firebase
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const provider = new EmailAuthProvider();
const storage = getStorage(app);

const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export { provider, auth, storage };
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
