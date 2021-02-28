import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBF_4GEv3AS0OzF09tjjzOnCZ-rLa_oe-E",
    authDomain: "todolist-react-7832e.firebaseapp.com",
    databaseURL: "https://todolist-react-7832e-default-rtdb.firebaseio.com",
    projectId: "todolist-react-7832e",
    storageBucket: "todolist-react-7832e.appspot.com",
    messagingSenderId: "992329780130",
    appId: "1:992329780130:web:1a8140c69223fa0d3980fb",
    measurementId: "G-Y6MH55ZZNR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const firestore = new firebase.firestore()

  export { firestore }