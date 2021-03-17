  import  firebase from "firebase";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCgJVnbY9hKj5C1Ir_6R04mwAD4IW8L5co",
      authDomain: "e-monkcommerce.firebaseapp.com",
      projectId: "e-monkcommerce",
      storageBucket: "e-monkcommerce.appspot.com",
      messagingSenderId: "178612733669",
      appId: "1:178612733669:web:7555179f31621d4f71760c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // export
  export const auth = firebase.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  