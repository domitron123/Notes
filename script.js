// Get a reference to the login form
var loginForm = document.getElementById("login-form");

// Add an event listener to the form's submit button
loginForm.addEventListener("submit", function(event) {
  // Prevent the form from submitting normally
  event.preventDefault();
  
  // Get the user's password from the password input field
  var password = loginForm.querySelector("#password").value;
  
  // Sign in the user with Firebase Authentication
  firebase.auth().signInWithEmailAndPassword(null, password)
  .then(function() {
    // Redirect the user to the notes page
    window.location.href = "notes.html";
  })
  .catch(function(error) {
    // Handle sign-in errors
    alert(error.message);
  });
});

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCFBwbQUvcwQVdGLE573GJlG5L-5O6CBII",
    authDomain: "website-login-2972c.firebaseapp.com",
    projectId: "website-login-2972c",  
    storageBucket: "website-login-2972c.appspot.com",  
    messagingSenderId: "298219993095",  
    appId: "1:298219993095:web:9bbd83f06b3772c4f712a2", 
    measurementId: "G-SSY948ZZ00" 
};
firebase.initializeApp(firebaseConfig);
