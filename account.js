function addUser() {

    window.location = "kwitter_room.html"
    
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);
    
    password = document.getElementById("password").value;
    
    localStorage.setItem("password", password);
}
