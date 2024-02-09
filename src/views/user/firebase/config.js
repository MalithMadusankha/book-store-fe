import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBncPDS3kVCikqnmyKsQCOUdIjCW7_jbOo",
  authDomain: "authapp-c1f86.firebaseapp.com",
  projectId: "authapp-c1f86",
  storageBucket: "authapp-c1f86.appspot.com",
  messagingSenderId: "584987945198",
  appId: "1:584987945198:web:69d84c0042986ae9d56bff",
};

firebase.initializeApp(firebaseConfig);

export const Auth = firebase.auth();
