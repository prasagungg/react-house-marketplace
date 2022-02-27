import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0LumTJJ3KlNPcpv6wfE8WkfEraPRkc1Q",
  authDomain: "house-markerplace-app.firebaseapp.com",
  projectId: "house-markerplace-app",
  storageBucket: "house-markerplace-app.appspot.com",
  messagingSenderId: "783298133767",
  appId: "1:783298133767:web:ffaddfcb49ce27041bcfa2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
