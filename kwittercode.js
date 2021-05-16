function addUser() {
    var password = "lala123";
    password2 = document.getElementById("password").value;
    console.log("Password2="+password2);
    if (password == password2) {
        console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "kwitter_room.html";
        
    } else {
        console.log("In ELSE");
        console.log("It didn't work krish!");        
        }
}
