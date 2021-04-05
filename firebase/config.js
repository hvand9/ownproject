import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDyHq6aqcf6z2jFLeCULb2Xj3ees6sh9zs",
  authDomain: "live-chat-room-1af83.firebaseapp.com",
  projectId: "live-chat-room-1af83",
  storageBucket: "live-chat-room-1af83.appspot.com",
  messagingSenderId: "264823984974",
  appId: "1:264823984974:web:4e5b636f004c6b257b041f",
  measurementId: "G-ZR4QMTRDYX"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }
