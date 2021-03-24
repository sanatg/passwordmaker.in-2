  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAjg7g5iDPyYuYEwdHp3YqyIeARYqvbVAc",
    authDomain: "passpill-3a780.firebaseapp.com",
    projectId: "passpill-3a780",
    storageBucket: "passpill-3a780.appspot.com",
    messagingSenderId: "799422724947",
    appId: "1:799422724947:web:06771bc87f16df8ff83fa6"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
    SignInWithGoogle=()=>{
    base_provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(base_provider).then(function(result){

        // ...
     var user = firebase.auth().currentUser;
            Swal.fire({
    title: 'Success!',
    text: 'Hi 👋 user: ' +user.displayName,
    icon: 'success',
    confirmButtonText: 'Cool'
    })
    }).catch(function(error){
         var errorCode = error.code;
      var errorMessage = error.message;
    Swal.fire({
    title: 'Error!!',
    text: errorMessage,
    icon: 'warning',
    confirmButtonText: 'OkieDokie'
    })
       
    })
  } 
var provider = new firebase.auth.GithubAuthProvider();

function githubSignin() {
   firebase.auth().signInWithPopup(provider)
   
   .then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
    var user2 = firebase.auth().currentUser;

                  Swal.fire({
    title: 'Success!',
    text: 'Hi 👋 user',
    icon: 'success',
    confirmButtonText: 'Cool'
    })
   }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    
       Swal.fire({
    title: 'Error!!',
    text: errorMessage,
    icon: 'warning',
    confirmButtonText: 'OkieDokie'
    })
   });
}

function facebooksignin(){
const FacebookAuth =  new firebase.auth.FacebookAuthProvider(); 
 firebase.auth().signInWithPopup(FacebookAuth)
 .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // The signed-in user info.
      var user = firebase.auth().currentUser;
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var accessToken = credential.accessToken;

    Swal.fire({
    title: 'Success!',
    text: 'Hi 👋 user: ' +user.displayName,
    icon: 'success',
    confirmButtonText: 'Cool'
    })
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
    Swal.fire({
    title: 'Error!!',
    text: errorMessage,
    icon: 'warning',
    confirmButtonText: 'OkieDokie'
    })
      // ...
    });
  // [END auth_facebook_signin_popup]
}
