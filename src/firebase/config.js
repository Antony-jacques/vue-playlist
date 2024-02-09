import firebase from "firebase/app";
import 'firebase/firestore'
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDDWUgLAEq39fHvRSo2wUladS5qdWa2Ez0",
  authDomain: "vue-playlists-d13a7.firebaseapp.com",
  projectId: "vue-playlists-d13a7",
  storageBucket: "vue-playlists-d13a7.appspot.com",
  messagingSenderId: "63543940593",
  appId: "1:63543940593:web:b74583be3cfff9c3706050",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage()
//timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
