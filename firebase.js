import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBxhtOZJ7nySowVgvp3eutF-0Ull2Vwuak",
  authDomain: "next-dri.firebaseapp.com",
  projectId: "next-dri",
  storageBucket: "next-dri.appspot.com",
  messagingSenderId: "335657431649",
  appId: "1:335657431649:web:29584c8f694fcd92253020",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export {db};
