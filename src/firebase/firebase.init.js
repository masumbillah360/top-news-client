// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdi222rM2J0JRpTolXGgmgAA8Fqv1E5J0",
  authDomain: "top-news-client.firebaseapp.com",
  projectId: "top-news-client",
  storageBucket: "top-news-client.appspot.com",
  messagingSenderId: "344737386676",
  appId: "1:344737386676:web:3f8bcc42ae43f6065b87e1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
