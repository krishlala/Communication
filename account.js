// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBQWxFEdBL0RHkD50U4fF2J4pNO9cz8xCM",
    authDomain: "kwitter-useridpassword.firebaseapp.com",
    projectId: "kwitter-useridpassword",
    storageBucket: "kwitter-useridpassword.appspot.com",
    messagingSenderId: "1093685112498",
    appId: "1:1093685112498:web:aba0237d29321c7b8f23ab"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser() {

    window.location = "kwitter_room.html"
    
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);
    
    password = document.getElementById("password").value;
    
    localStorage.setItem("password", password);
    
    firebase.database().ref("/").child(password).update({
    purpose : "saving password"
  });
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       password = childKey;
       console.log("Password - " + password);
      row = "<div class='password' id="+password+" onclick='redirectToRoomName(this.id)' >#"+ password +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}
