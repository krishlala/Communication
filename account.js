// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBvzJ8vetxsOuAdbxBcjvJPc2gV35_y-2Q",
    authDomain: "kwitterrrr.firebaseapp.com",
    projectId: "kwitterrrr",
    storageBucket: "kwitterrrr.appspot.com",
    messagingSenderId: "266128671413",
    appId: "1:266128671413:web:8e51961bed9965205574fc"
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
