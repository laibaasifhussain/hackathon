// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtYFvMbjasyFFzgrFxVuYmP0UqO1ENzx8",
  authDomain: "hackathon-c1ad0.firebaseapp.com",
  projectId: "hackathon-c1ad0",
  storageBucket: "hackathon-c1ad0.appspot.com",
  messagingSenderId: "689207869004",
  appId: "1:689207869004:web:bf340e31bd7a8e5a933ee9",
  measurementId: "G-HKWDBEMDN0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);