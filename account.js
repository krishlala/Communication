// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCO5TgWDbRGXrYYDjRFLH3JuVgU5OOMYwY",
    authDomain: "kwitterr-bddf1.firebaseapp.com",
    projectId: "kwitterr-bddf1",
    storageBucket: "kwitterr-bddf1.appspot.com",
    messagingSenderId: "55709026884",
    appId: "1:55709026884:web:5495e2ab81d13ebdf98a11"
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
