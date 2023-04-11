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

// Initialize Firebase with the configuration object
firebase.initializeApp(firebaseConfig);

// Get a reference to the login form in the HTML
var loginForm = document.getElementById("login-form");

// Add an event listener to the form's submit button
loginForm.addEventListener("submit", function(event) {
  // Prevent the form from submitting normally
  event.preventDefault();
  
  // Get the user's password from the password input field in the form
  var password = loginForm.querySelector("#password").value;
  
  // Sign in the user with Firebase Authentication using the email and password
  firebase.auth().signInWithEmailAndPassword("domtownshend@gmail.com", password)
  .then(function() {
    // Redirect the user to the notes page if sign in is successful
    window.location.href = "notes.html";
  })
  .catch(function(error) {
    // Handle sign-in errors by displaying an alert with the error message
    alert(error.message);
  });
});

// Check if the user is logged in, and redirect to index.html if not
firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {
    window.location.href = "index.html";
  }
});
