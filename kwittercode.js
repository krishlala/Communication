function addUser() {
    var password = "lala123";
    password2 = document.getElementById("password").value;
    console.log("Password22="+password2);
    console.log("Password ="+ password);
    if (password == password2) {
        console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "kwitter_room.html";
        
    } else {
        console.log("In ELSE");
        }
}
