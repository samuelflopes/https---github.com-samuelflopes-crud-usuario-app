import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDoGf7TqcGc7Axa6fUFoFhkjY22BSSNCYU",
    authDomain: "app-crud-e7ae5.firebaseapp.com",
    projectId: "app-crud-e7ae5",
    storageBucket: "app-crud-e7ae5.appspot.com",
    messagingSenderId: "280585050835",
    appId: "1:280585050835:web:09f8aa8f787922fc9dd226"
  };
  
  // Initialize Firebase
  let fireDb = firebase.initializeApp(firebaseConfig);

  //export the fireDb variable
  export default fireDb.database().ref();