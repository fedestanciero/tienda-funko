import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyACu-6uRBQSaJUoCAB4_QI8T66q-sYgRhM",
  authDomain: "tienda-funko-b42a4.firebaseapp.com",
  projectId: "tienda-funko-b42a4",
  storageBucket: "tienda-funko-b42a4.appspot.com",
  messagingSenderId: "397018498358",
  appId: "1:397018498358:web:dbcbfd9dcdce820de69f97",
  measurementId: "G-70PSXWZ0B2"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function getFirestoreApp(){
    return(
        app,
        analytics
    )
}