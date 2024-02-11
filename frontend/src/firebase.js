// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADf6PKvKStTSNSrNvTDxgDy_Tgyh1ctSY",
  authDomain: "mern-state-225b8.firebaseapp.com",
  projectId: "mern-state-225b8",
  storageBucket: "mern-state-225b8.appspot.com",
  messagingSenderId: "894344532549",
  appId: "1:894344532549:web:ccc5b7d11ff549853bc92c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;