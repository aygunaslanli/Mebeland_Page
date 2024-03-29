import firebase from "firebase/app";
import 'firebase/database';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0DxNmymIDcqLVl0HyhQgKsItm9H0DKN4",
  authDomain: "mebeland-30e76.firebaseapp.com",
  databaseURL: "https://mebeland-30e76-default-rtdb.firebaseio.com",
  projectId: "mebeland-30e76",
  storageBucket: "mebeland-30e76.appspot.com",
  messagingSenderId: "24840288609",
  appId: "1:24840288609:web:f5613830ed9c0b0a092d20"
};

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();
  export {database  as default} 