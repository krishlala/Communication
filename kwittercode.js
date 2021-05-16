function addUser() {
    var password = "lala123";
    password2 = document.getElementById("password");
    console.log("Password2="+password2.value);
    if (password == password2) {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
        
    } else {
            console.log("You suck Krish! It didn't work!")
        }
}
