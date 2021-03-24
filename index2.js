	firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

  } else {
    // No user is signed in.
     window.location.assign("index.html")
  }
});

	      document.addEventListener("keydown", function(e) {
  if (e.keyCode == 83 && (navigator.platform.match("linux") ? e.metaKey : e.ctrlKey)) {
    e.preventDefault();

  }
}, false);
  document.addEventListener("keydown", function(e) {
  if (e.keyCode == 83 && (navigator.platform.match("windows") ? e.metaKey : e.ctrlKey)) {
    e.preventDefault();

  }
}, false);
  document.addEventListener("keydown", function(e) {
  if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
    e.preventDefault();

  }
}, false);