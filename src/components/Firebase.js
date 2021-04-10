import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAPTWIeA9PK2vKqu79AID9TixRUN8hnE10",
    authDomain: "virus-tracker-fcfd8.firebaseapp.com",
    projectId: "virus-tracker-fcfd8",
    storageBucket: "virus-tracker-fcfd8.appspot.com",
    messagingSenderId: "644999152573",
    appId: "1:644999152573:web:009c7b345e8c233b0608d4",
    measurementId: "G-JCS3Y4XGDW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;