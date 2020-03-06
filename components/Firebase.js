import * as firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAswFKykOjxRjaL5j5xxaSCyNelJlmTzI0",
  authDomain: "react-native-for-designers.firebase.app.com",
  databaseURL: "https://react-native-for-designers.firebase.io",
  storageBucket: "react-native-for-designers.appspot.com"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
