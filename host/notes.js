// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFBwbQUvcwQVdGLE573GJlG5L-5O6CBII",

  authDomain: "website-login-2972c.firebaseapp.com",

  projectId: "website-login-2972c",

  storageBucket: "website-login-2972c.appspot.com",

  messagingSenderId: "298219993095",

  appId: "1:298219993095:web:9bbd83f06b3772c4f712a2",

  measurementId: "G-SSY948ZZ00"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the Firestore database
  const db = firebase.firestore();
  
  // Check if the user is logged in, and redirect to index.html if not
  firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
      window.location.href = "index.html";
    }
  });
  