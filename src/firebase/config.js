// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACu-6uRBQSaJUoCAB4_QI8T66q-sYgRhM",
  authDomain: "tienda-funko-b42a4.firebaseapp.com",
  projectId: "tienda-funko-b42a4",
  storageBucket: "tienda-funko-b42a4.appspot.com",
  messagingSenderId: "397018498358",
  appId: "1:397018498358:web:dbcbfd9dcdce820de69f97",
  measurementId: "G-70PSXWZ0B2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function getFirestoreApp(){
    return(
        app,
        analytics
    )
}