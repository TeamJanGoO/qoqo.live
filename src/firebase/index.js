// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0y58H8At9Xv_l40IAf_X7y55OeOGccyY",
  authDomain: "qoqolive.firebaseapp.com",
  projectId: "qoqolive",
  storageBucket: "qoqolive.appspot.com",
  messagingSenderId: "201954126478",
  appId: "1:201954126478:web:fe0ef6824c4b69631637df",
  measurementId: "G-T1SCPT3JDM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebase_app);