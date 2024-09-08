import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlarsS73_j6fIwVlmSkDesc3OXRt-VCu8",
  authDomain: "carwashio.firebaseapp.com",
  projectId: "carwashio",
  storageBucket: "carwashio.appspot.com",
  messagingSenderId: "1086724976110",
  appId: "1:1086724976110:web:199f526db9c34d60bf72ff",
  measurementId: "G-6DCWW9JR6P"
};

initializeApp(firebaseConfig);
const auth = getAuth();
export default auth;
