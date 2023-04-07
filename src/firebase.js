// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //it is copied exactly same i got in firebase platform.
  apiKey: "AIzaSyATSoASwxjLkEV2EglDTTougq4zwn3Siec",
  authDomain: "realtor-clone-bb0ba.firebaseapp.com",
  projectId: "realtor-clone-bb0ba",
  storageBucket: "realtor-clone-bb0ba.appspot.com",
  messagingSenderId: "245531217731",
  appId: "1:245531217731:web:48d71344817a4e65cca9f6",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
