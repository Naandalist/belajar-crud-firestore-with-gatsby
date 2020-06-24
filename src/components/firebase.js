import firebase from "firebase/app"
import "firebase/firestore"

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDhvYyQGweD-K6P2b31M-zM5-im02mrPD0",
  authDomain: "crudtut.firebaseapp.com",
  databaseURL: "https://crudtut.firebaseio.com",
  projectId: "crudtut",
  storageBucket: "crudtut.appspot.com",
  messagingSenderId: "677709571346",
  appId: "1:677709571346:web:70323327e6d2c05ac5bfcb",
  measurementId: "G-D65P2BL9GM",
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// firebase.analytics()
export default firebase
