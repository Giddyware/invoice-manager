// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

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
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
