/*  _________                     __      ________              __          
  /   _____/____    ____ _____ _/  |_   /  _____/ __ _________/  |______   
  \_____  \\__  \  /    \\__  \\   __\ /   \  ___|  |  \____ \   __\__  \  
  /        \/ __ \|   |  \/ __ \|  |   \    \_\  \  |  /  |_> >  |  / __ \_
 /_______  (____  /___|  (____  /__|    \______  /____/|   __/|__| (____  /
         \/     \/     \/     \/               \/      |__|             \/ 
    This progam is made by Sanat Gupta.
    Don't remove this piece of text if you reuse this code.
    ©2021
 */

// You can add a message if you wish so, in String format
Notiflix.Loading.Circle();
Notiflix.Loading.Change('Loading...'+0+'%');
var css = "font-size: 40px;background-color: #FFFF00";
var css2 = "background-color: red;color:white;font-size: 20px;";
var longitude1 = "";
var latitude1 = "";
var myPassword;
var myPassword2;
var myUsername = "myUsername";
var pass;

  var encrypted2;
 var lengthShowPassword;
var user = firebase.auth().currentUser;
  var collectionmade = false;
var usernameinput;
var slider = document.getElementById("myRange");
var DocIds;
var Ids;
// Code goes here
var keySize = 256;
var ivSize = 128;
var iterations =2084;

var encrypter;
var file;
var imgURL;
var thisRef;
var storageRef;
var credential;
var errorattastringDatachmentvalue = false;
var uploadvalue = false;
var hash1p1;
var hash1p2;
var hash1p3;
var hash1p4;

var hash2p1;
var hash2p2;
var hash2p3;
var hash2p4;

var decrypter;
var stringData;
console.log("%c⚠️⚠️ Warning ⚠️⚠️", css);
console.log("%c Do not enter Any irrelevant code that you can't understand if entered may cause site to break or get your data stolen",css2);
console.log("PassWordMaker is made by using notiflix,vanilla javascript,colorlib and lots of love ♥")

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
/*db.collection("users").doc("frank").set({
  name: "Frank",
  favorites: {
    food: "Pizza",
    color: "Blue",
    subject: "Recess"
  },
  age: 12
}).then(function() {
  console.log("Frank created");
});*/ 

  var docRef = db.collection("hashes").doc("l8mRteKCXBCrAHGtkADR");

docRef.get().then((doc) => {
    if (doc.exists) {
       hash1p1 = doc.data().hash1.substring(100,200)
       hash1p2 = doc.data().hash1.substring(1500,1700)
 
        console.log("Document data:");
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});


 var user = firebase.auth().currentUser
    retrieve();
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
      document.getElementById("registerationform").style.display = "none";
    var slider = document.getElementById("Range");
var output = document.getElementById("passlength");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
  // document.addEventListener('contextmenu', event => event.preventDefault());
     var user = firebase.auth().currentUser;

     var userphoto = user.photoURL;
     if ( userphoto === null) {
       document.getElementById("profile-pic").src = "astronaut.svg" ;
        document.getElementById("imgget2").src = "user.svg";
     }
     else{
       document.getElementById("profile-pic").src = userphoto;
       document.getElementById("imgget2").src = userphoto;
     }
    
    if(user != null){
      var email_id = user.email;

    document.getElementById("user_para2").innerHTML =  email_id;
        var name = user.displayName;
           if ( name === null) {
              document.getElementById("user_para").innerHTML = "user";
               document.getElementById("nameget2").innerHTML = "user";
              
           }
     else if (name != null){
        document.getElementById("user_para").innerHTML = name;
        document.getElementById("nameget2").innerHTML = name;
        
     }
     // document.getElementById("user_para4").innerHTML = name;
    }
   /*var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
}).catch(function(error) {
  // An error happened.
});*/
  } else {
    // No user is signed in.
    var user = firebase.auth().currentUser;
    if(user === null){
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
      document.getElementById("registerationform").style.display = "none";
    }
    

    Notiflix.Loading.Remove(600);

}
});
var i = 0;
(function(){
     if (i == 0) {
    i = 1;
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        Notiflix.Loading.Change('Loading...'+width+'%');
      }
    }
  }

})();


function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
  .then((user) => {
    // Signed in 
      var user = firebase.auth().currentUser;
    var message = "";
    if (user.displayName === null){
      message = "Hi 👋 user";
    } 
      else {
        message = "Hi 👋 user:"+ user.displayName
      }
    Swal.fire({
    title: 'Success!',
    text: message,
    icon: 'success',
    confirmButtonText: 'Cool'
    })
   var userEmail = document.getElementById("email_field").value = "";
  var userPass = document.getElementById("password_field").value = "";
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    Swal.fire({
    title: 'Error!',
    text: errorMessage,
    icon: 'warning',
    confirmButtonText: 'Cool'
    })
  });

   var userEmail = document.getElementById("email_field").value = "";
  var userPass = document.getElementById("password_field").value = "";
}

var output = document.getElementById("passwordlength");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
function SignupWithEmailAndPassword(){
  var email = document.getElementById("emailid").value;
  var password = document.getElementById("masterpassword").value;
  var ConfirmPassword = document.getElementById("re_pass").value;
  if (password === ConfirmPassword) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
         var userpersonalname = document.getElementById("nameOfUser").value;
var user = firebase.auth().currentUser;
user.updateProfile({
  displayName: userpersonalname,
}).then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
        var errorCode = error.code;
      var errorMessage = error.message;
      Notiflix.Notify.Failure('Error try again');
});
     document.getElementById("emailid").value = "";
     document.getElementById("masterpassword").value = "";
     document.getElementById("re_pass").value = "";
        Swal.fire({
    title: 'Success!',
    text: 'Account registered',
    icon: 'success',
    confirmButtonText: 'Cool'
    }).then(()=>{
      window.location.assign("cookie.html")
    })





  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
            Swal.fire({
    title: 'Error!',
    text: errorMessage,
    icon: 'warning',
    confirmButtonText: 'Cool'
    })
    // ..
  });
  } else {
        Swal.fire({
    title: 'Error!',
    text: "Your Both passwords don't match",
    icon: 'warning',
    confirmButtonText: 'Cool'
    })
  }

}
function resetAccountPassword(){
      var auth = firebase.auth();
      var usermail = document.getElementById("resetpasswordemail").value;
var emailAddress = usermail;

auth.sendPasswordResetEmail(emailAddress).then(function() {
  // Email sent.
    Swal.fire({
    title: 'Success!',
    text: 'Password reset email sent',
    icon: 'success',
    confirmButtonText: 'Cool'
    })
}).catch(function(error) {
  // An error happened.
      var errorCode = error.code;
    var errorMessage = error.message;
            Swal.fire({
    title: 'Error!',
    text: errorMessage,
    icon: 'warning',
    confirmButtonText: 'Cool'
    })
});
}
function StorePasswordWithSiteName(){

  var user = firebase.auth().currentUser;
  var input1 = document.getElementById("field1").value;
  usernameinput  = document.getElementById("field2").value;

  collectionmade = true;
db.collection(user.uid).doc().set({
  SiteName:input1,
  SiteUsername:usernameinput,
  Password:encrypter,
  Date:new Date(),
  isCollectionMade:collectionmade,
})
.then(function(docRef) {
   // console.log("Document written with ID: ", docRef.id);
    
    Notiflix.Notify.Success('Password Added Successfully');
    var input1 = document.getElementById("field1").value = ""
    var input2 = document.getElementById("field2").value = ""
    var input3 = document.getElementById("passpara").value = "" ;
    var input4 = document.getElementById("myRange").value = "0" ;
    var textinput4 = document.getElementById("passwordlength").innerHTML = "1";


})
.catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
       Notiflix.Notify.Failure("Sorry Try Again");
});
}

function encrypt (msg, pass) {
    document.getElementById("myRange").style.cursor = "progress";
     document.getElementById("passpara").style.cursor = "progress";
  var salt = CryptoJS.lib.WordArray.random(128/8);
  
  var key = CryptoJS.PBKDF2(pass, salt, {
      keySize: keySize/32,
      iterations: iterations
    });

  var iv = CryptoJS.lib.WordArray.random(128/8);
  
  var encrypted = CryptoJS.AES.encrypt(msg, key, { 
    iv: iv, 
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC
    
  });
  
  // salt, iv will be hex 32 in length
  // append them to the ciphertext for use  in decryption
  var transitmessage = salt.toString()+ iv.toString() + encrypted.toString();
        document.getElementById("myRange").style.cursor = "pointer";
     document.getElementById("passpara").style.cursor = "pointer";
  return transitmessage;


}

function decrypt (transitmessage, pass) {
  var salt = CryptoJS.enc.Hex.parse(transitmessage.substr(0, 32));
  var iv = CryptoJS.enc.Hex.parse(transitmessage.substr(32, 32))
  var encrypted = transitmessage.substring(64);
  
  var key = CryptoJS.PBKDF2(pass, salt, {
      keySize: keySize/32,
      iterations: iterations
    });

  var decrypted = CryptoJS.AES.decrypt(encrypted, key, { 
    iv: iv, 
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC
    
  })
  return decrypted;
}
function showpass(){
  var user = firebase.auth().currentUser;
  myPassword = user.email+"1ijj09990U4038**#89"+user.uid+"098394902009("+hash1p2+"(!()@(*#;gcj"+user.displayName+hash1p1;
  lengthShowPassword = makeid(slider.value);
  pass = document.getElementById("passpara").value = lengthShowPassword;
  encrypter = encrypt(document.getElementById("passpara").value ,myPassword);

}
function showpass2(){
    var user = firebase.auth().currentUser;
  myPassword = user.email+"1ijj09990U4038**#89"+user.uid+"098394902009("+hash1p2+"(!()@(*#;gcj"+user.displayName+hash1p1;
    encrypter = encrypt(document.getElementById("passpara").value ,myPassword);
}
function editenable(){
document.getElementById('passpara').readOnly = false;
document.getElementById( "passwordeditbutton" ).setAttribute( "onClick", "editdisable()")
document.getElementById('passwordeditbutton').className = "fad fa-times-circle";
document.getElementById('passavebutton').style.display = "none";
Notiflix.Notify.Success("Editing Enabled *to save the password disable editing");

}
function editdisable() {
  document.getElementById('passpara').readOnly = true;
 document.getElementById( "passwordeditbutton" ).setAttribute( "onClick", "editenable()")
   document.getElementById('passwordeditbutton').className = "fad fa-edit";
   document.getElementById('passavebutton').style.display = "block";
    showpass2()
   Notiflix.Notify.Failure("Editing Disabled");
}
function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*?';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
  
}
function makepass(){
  var test = document.getElementById("Range").value;
  var passwordmade = makeid2(test);
  var pass2 = document.getElementById("passpara2").value = passwordmade ;
}
function makeid2(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*?';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
  
}
  function retrieve(){
  const list_div = document.querySelector("#list_div")
  
  var user = firebase.auth().currentUser;

    db.collection(user.uid).orderBy("SiteName").onSnapshot(function(snapshot) {
      snapshot.docChanges().forEach(function(change) {
    if (change.type === "added") {
      
        var user = firebase.auth().currentUser;

  myPassword = user.email+"1ijj09990U4038**#89"+user.uid+"098394902009("+hash1p2+"(!()@(*#;gcj"+user.displayName+hash1p1;
  decrypter = decrypt(change.doc.data().Password,myPassword);
        // var decrypted = CryptoJS.AES.decrypt(change.doc.data().Password, myPassword);
  stringData = decrypter.toString(CryptoJS.enc.Utf8);

      //console.log(stringData)
    
        DocIds = change.doc.id
        Ids = change.doc.data().SiteName;
     list_div.innerHTML += "<div class = 'list-item'><h3>Site Name: <a href="+"http://"+change.doc.data().SiteName+" target='_blank'>"+change.doc.data().SiteName+"</a></h3><h3>User name: "+change.doc.data().SiteUsername+"</h3><h3>Password: <input class = 'input2' placeholder = 'Password...' value = '"+stringData+"' readonly/></h3> <p>id: "+change.doc.id+"</p></div>"         
        
          if(change.doc.data().isCollectionMade === true){
              var empty = document.getElementById("emptyVaultOmaria").style.display = "none"
               document.getElementById("list_div").style.display = "block"
             
          }
          else if(change.doc.data().isCollectionMade === false){
            var empty = document.getElementById("emptyVaultOmaria").style.display = "block"
            document.getElementById("list_div").style.display = "none"
          
          }
         
        
    }


   


    //else{list_div.innerHTML +="<div class='list-item'> <img id='profile-pic' src='Empty_All_Omaria.png' alt='avatar image' height='100'/> </div>"}
   });

  });

Notiflix.Loading.Remove(700)
  // expected output: "Success!"
 

}

    
   function clearCollection(path) {
  const ref = db .collection(path)
  ref.onSnapshot((snapshot) => {
    snapshot.docs.forEach((doc) => {
      ref.doc(doc.id).delete().then((doc)=>{
    location.reload() 
      })
    })
  })
}
   function clearDoc(path,docpath) {
  const ref = db.collection(path).doc(docpath)
ref.get().then((doc) => {
ref.delete().then((doc)=>{
 window.location.reload()
}).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    Notiflix.Notify.Failure("Error try again later")
    });
  })
}
function DeleteDoc(){
  var Docidinputvalue = document.getElementById("DocumentIdInput").value
  var user = firebase.auth().currentUser; 
  clearDoc(user.uid,Docidinputvalue)
}
function deleteColl(){
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-outline-primary',
    cancelButton: 'btn btn-outline-primary',
  },
  buttonsStyling: true
})

swalWithBootstrapButtons.fire({
  title: 'Are you sure?',
  text: "you want to delete the vault!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Yes',

  cancelButtonText: 'No',
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    var user = firebase.auth().currentUser; 
clearCollection(user.uid)
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire(
      'Cancelled',
      'The Action was stopped',
      'success'
    )
  }
})
// Use it like this:

}
function  UpdateDoc(){
  var idInput = document.getElementById("DocId").value;
  var sitenameup = document.getElementById("Sitenameupdate").value;
  var usernameup = document.getElementById("Usernameupdate").value;
  var passwordup = document.getElementById("Passwordupdate").value;
    var user = firebase.auth().currentUser;
    myPassword = user.email+"1ijj09990U4038**#89"+user.uid+"098394902009("+hash1p2+"(!()@(*#;gcj"+user.displayName+hash1p1;
encrypter = encrypt(passwordup,myPassword);
  db.collection(user.uid).doc(idInput).update({
                "Password":encrypter,
                "SiteName":sitenameup,
                "SiteUsername":usernameup,
            })
            .then(() => {
                Notiflix.Notify.Info("Click on me to see the effects",function(){
                  location.reload()
                })
            })
            .catch((error) => {
                  var errorCode = error.code;
    var errorMessage = error.message;
                Notiflix.Notify.Failure("Error try again later")
            });
            // [END update_document_nested]
     
}
function copyText(){
    var copyText = document.getElementById("passpara");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  if (document.execCommand("copy")) {
    document.getElementById("changeicon").className = "fas fa-clipboard";
     Notiflix.Notify.Success('Copied');
  } else {
    document.getElementById("changeicon").className = "fas fa-copy";
  }
   
}

function copyText2(){
    var copyText = document.getElementById("passpara2");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  if (document.execCommand("copy")) {
    document.getElementById("changeicon2").className = "fas fa-clipboard";
     Notiflix.Notify.Success('Copied');
  } else {
    document.getElementById("changeicon2").className = "fas fa-copy";
  }
   
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
  const dropZoneElement = inputElement.closest(".drop-zone");

  dropZoneElement.addEventListener("click", (e) => {
    inputElement.click();
  });

  inputElement.addEventListener("change", (e) => {
    if (inputElement.files.length) {
      updateThumbnail(dropZoneElement, inputElement.files[0]);
    }
  });

  dropZoneElement.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZoneElement.classList.add("drop-zone--over");
  });

  ["dragleave", "dragend"].forEach((type) => {
    dropZoneElement.addEventListener(type, (e) => {
      dropZoneElement.classList.remove("drop-zone--over");
    });
  });

  dropZoneElement.addEventListener("drop", (e) => {
    e.preventDefault();

    if (e.dataTransfer.files.length) {
      inputElement.files = e.dataTransfer.files;
      updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
    }

    dropZoneElement.classList.remove("drop-zone--over");
  });
});

/**
 * Updates the thumbnail on a drop zone element.
 *
 * @param {HTMLElement} dropZoneElement
 * @param {File} file
 */
function updateThumbnail(dropZoneElement, file) {
  let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

  // First time - remove the prompt
  if (dropZoneElement.querySelector(".drop-zone__prompt")) {
    dropZoneElement.querySelector(".drop-zone__prompt").remove();
  }

  // First time - there is no thumbnail element, so lets create it
  if (!thumbnailElement) {
    thumbnailElement = document.createElement("div");
    thumbnailElement.classList.add("drop-zone__thumb");
    dropZoneElement.appendChild(thumbnailElement);
  }

  thumbnailElement.dataset.label = file.name;

  // Show thumbnail for image files
  if (file.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
    };
  } else {
    thumbnailElement.style.backgroundImage = null;
  }
}
function enablerrorattachment(){
  document.getElementById('addattachment').title = 'disable adding error attachment';
  document.getElementById('addattachment').innerHTML = '&#9746;';
  errorattachmentvalue = true;
  document.getElementById("errorattachmentextvalue").innerHTML = "Drop Error attachment(eg. screenshots)";
  document.getElementById( "addattachment" ).setAttribute( "onClick", "disableerrorattachment()")
  document.getElementById("file-input").disabled = false;
}
function disableerrorattachment(){
  document.getElementById( "addattachment" ).setAttribute( "onClick", "enablerrorattachment()")
  errorattachmentvalue = false;
  document.getElementById('addattachment').title = 'enable adding error attachment';
  document.getElementById('addattachment').innerHTML = '&#9745;';
  document.getElementById("errorattachmentextvalue").innerHTML = "error file attachment disabled enable it from more options";
  document.getElementById("file-input").disabled = true;
}
function previewFile(){

 file = document.getElementById("file-input").files[0];
 
  
   storageRef = firebase.storage().ref('errorImages/');
  
  //dynamically set reference to the file name
  var thisRef = storageRef.child(file.name);

  //put request upload file to firebase storage
  thisRef.put(file).then(function(snapshot) {
  // Update successful.
    thisRef = storageRef.child(file.name);
 thisRef.getDownloadURL().then(function(url) {
  imgURL = url;
  localStorage.setItem("urlvalue",imgURL)
  uploadvalue = true;
  })
})
  //dynamically set reference to the file name

  }
function secfunction(){
  GiveFeedback()
  Notiflix.Notify.Info("Tip: if you don't get the confirmation try to click 3-4 times this can happen due to slow internet connection")
}
function GiveFeedback(){
var user = firebase.auth().currentUser;
var feed = document.getElementById("msgtext").value;
if (errorattachmentvalue === false) {
  var urltry = "not added by user"
  uploadvalue = true;

}
else if(errorattachmentvalue === true){
  previewFile();
  var urltry = localStorage.getItem("urlvalue")



}
if (uploadvalue != false) {
db.collection("UserFeedback").add({
  DisplayName:user.displayName,
  Email:user.email,
  Date:new Date(),
  FeedBack:feed,
  ErrorImage:urltry,
})
.then(function(docRef) {
   // console.log("Document written with ID: ", docRef.id);
    Swal.fire({
    title: 'Success!',
    text: 'FeedBack given',
    icon: 'success',
    confirmButtonText: 'Cool'
    }).then(()=>{
          window.localStorage.clear();
          uploadvalue = false;
    })

    closeForm();


})
.catch(function(error) {
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
else{

}

}
function SearchList() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("list_div");
  li = ul.getElementsByClassName("list-item");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("h3")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
          
      }
  }

}



var mybutton = document.getElementById("scrollBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

/*var myString   = "blablabla Card game bla";
var myPassword = "myPassword";

// PROCESS
var encrypted = CryptoJS.AES.encrypt(myString, myPassword);
var decrypted = CryptoJS.AES.decrypt(encrypted, myPassword);
document.getElementById("demo0").innerHTML = myString;
document.getElementById("demo1").innerHTML = encrypted;
document.getElementById("demo2").innerHTML = decrypted;
document.getElementById("demo3").innerHTML = decrypted.toString(CryptoJS.enc.Utf8);
*/
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

function openNav() {
  document.getElementById("mySidenav").style.width = "460px";
  document.getElementById("user_div").style.marginRight = "420px";
 
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0%";
    document.getElementById("user_div").style.marginRight = "0%";
}

function signout(){

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-outline-primary',
    cancelButton: 'btn btn-outline-primary',
  },
  buttonsStyling: true
})

swalWithBootstrapButtons.fire({
  title: 'Are you sure?',
  text: "you want to logout!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Yes',

  cancelButtonText: 'No',
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    signoutredirect();
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire(
      'Cancelled',
      'The Action was stopped',
      'success'
    )
  }
})
}
function signoutredirect(){
 firebase.auth().signOut().then(() => {
          Swal.fire({
          title: 'Success!',
          text: 'Account deleted successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
          }).then(()=>{
      location.reload()
    })
  
  // Sign-out successful.
}).catch((error) => {
  // An error happened.

});
}

function seepass(){
  document.getElementById("masterpassword").type = "text";
  document.getElementById("visibility").src = "baseline-visibility_off.svg"; 

document.getElementById( "visibility" ).setAttribute( "onClick", "hidepass()")
}

function hidepass(){
  document.getElementById("masterpassword").type = "password";
  document.getElementById("visibility").src = "baseline-visibility.svg"; 

document.getElementById( "visibility" ).setAttribute( "onClick", "seepass()")
}
function seepass2(){
  document.getElementById("re_pass").type = "text";
  document.getElementById("visibility2").src = "baseline-visibility_off.svg"; 

document.getElementById( "visibility2" ).setAttribute( "onClick", "hidepass2()")
}

function hidepass2(){
  document.getElementById("re_pass").type = "password";
  document.getElementById("visibility2").src = "baseline-visibility.svg"; 

document.getElementById( "visibility2" ).setAttribute( "onClick", "seepass2()")
}

function showform(){
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "none";
    document.getElementById("registerationform").style.display = "block";
}
function hideform(){
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
    document.getElementById("registerationform").style.display = "none";
}

function checkboxTickCheck(){
  var checkBox = document.getElementById("agree-term");
  var button = document.getElementById("registerButton");
  if (checkBox.checked == true){
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }


  }

     function clearCollectionwhiledelete(path) {
  const ref = db .collection(path)
  ref.onSnapshot((snapshot) => {
    snapshot.docs.forEach((doc) => {
      ref.doc(doc.id).delete().then((doc)=>{
    var user = firebase.auth().currentUser;
    
    if(firebase.auth().currentUser.providerData[0].providerId === "password"){
(async () => {

  const { value: password } = await Swal.fire({
  title: 'Enter your password',
  input: 'password',
  inputPlaceholder: 'Enter your password',
  inputAttributes: {
    autocapitalize: 'off',
    autocorrect: 'off',
  }
})
  if (password) {
          var reauthpassword = password;
      credential = firebase.auth.EmailAuthProvider.credential(user.email,reauthpassword);
      user.reauthenticateWithCredential(credential).then(function() {
  // User re-authenticated.
     
  user.delete().then(function() {
    // User deleted.
          Swal.fire({
          title: 'Success!',
          text: 'Account deleted successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
          }).then(()=>{
            window.location.reload()
          })

  })
    .catch(function(error) {
    // An error happened.
      var errorCode = error.code;
      var errorMessage = error.message;
          Swal.fire({
          title: 'Error!',
          text: errorMessage,
          icon: 'warning',
          confirmButtonText: 'Cool'

          })
  })
}).catch(function(error) {
  // An error happened.
        var errorCode = error.code;
      var errorMessage = error.message;
            Swal.fire({
          title: 'Error!',
          text: errorMessage,
          icon: 'warning',
          confirmButtonText: 'Cool'

          })
});
  }



})()

}
else if(firebase.auth().currentUser.providerData[0].providerId === "google.com"){
 firebase.auth().currentUser.reauthenticateWithPopup(
    new firebase.auth.GoogleAuthProvider()).then(function(userCredential) {
        // You can now delete the user:
        return user.delete().then(function() {
    // User deleted.
          Swal.fire({
          title: 'Success!',
          text: 'Account deleted successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
          }).then(()=>{
            location.reload()
          })

  })
    .catch(function(error) {
    // An error happened.
      var errorCode = error.code;
      var errorMessage = error.message;
          Swal.fire({
          title: 'Error!',
          text: errorMessage,
          icon: 'warning',
          confirmButtonText: 'Cool'

          })
    }).catch(function(error) {
        // Credential mismatch or some other error.  
              var errorCode = error.code;
      var errorMessage = error.message;
          Swal.fire({
          title: 'Error!',
          text: errorMessage,
          icon: 'warning',
          confirmButtonText: 'Cool'

          })
    }
);
});
}
else if(firebase.auth().currentUser.providerData[0].providerId === "github.com"){
 firebase.auth().currentUser.reauthenticateWithPopup(
    new firebase.auth.GithubAuthProvider()).then(function(userCredential) {
        // You can now delete the user:
        return user.delete().then(function() {
    // User deleted.
          Swal.fire({
          title: 'Success!',
          text: 'Account deleted successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
          }).then(()=>{
            location.reload()
          })

  })
    .catch(function(error) {
    // An error happened.
      var errorCode = error.code;
      var errorMessage = error.message;
          Swal.fire({
          title: 'Error!',
          text: errorMessage,
          icon: 'warning',
          confirmButtonText: 'Cool'

          })
    }).catch(function(error) {
        // Credential mismatch or some other error.  
              var errorCode = error.code;
      var errorMessage = error.message;
          Swal.fire({
          title: 'Error!',
          text: errorMessage,
          icon: 'warning',
          confirmButtonText: 'Cool'

          })
    }
);
});
}
else if(firebase.auth().currentUser.providerData[0].providerId === "facebook.com"){
firebase.auth().currentUser.reauthenticateWithPopup(
    new firebase.auth.FacebookAuthProvider()).then(function(userCredential) {
        // You can now delete the user:
        return user.delete().then(function() {
    // User deleted.
          Swal.fire({
          title: 'Success!',
          text: 'Account deleted successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
          }).then(()=>{
            location.reload()
          })

  })
    .catch(function(error) {
    // An error happened.
      var errorCode = error.code;
      var errorMessage = error.message;
          Swal.fire({
          title: 'Error!',
          text: errorMessage,
          icon: 'warning',
          confirmButtonText: 'Cool'

          })
    }).catch(function(error) {
        // Credential mismatch or some other error.  
              var errorCode = error.code;
      var errorMessage = error.message;
          Swal.fire({
          title: 'Error!',
          text: errorMessage,
          icon: 'warning',
          confirmButtonText: 'Cool'

          })
    }
);
});
}

    

      })
    })
  })
}


  function deleteAccount() {
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-outline-primary',
    cancelButton: 'btn btn-outline-primary',
  },
  buttonsStyling: true
})

swalWithBootstrapButtons.fire({
  title: 'Are you sure?',
  text: "you want to Delete your account all of the data will be deleted !",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Yes',

  cancelButtonText: 'No',
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    var user = firebase.auth().currentUser;
  clearCollectionwhiledelete(user.uid)

  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire(
      'Cancelled',
      'The Action was stopped',
      'success'
    )
  }
})

}


$('.button').click(function(){
  $('.menu .items span').toggleClass('active');
   $('.menu .button').toggleClass('active');
});







//function to save file
