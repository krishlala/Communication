function addUser() {
    password = document.getElementById("password").value;
    if (password == password) {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}
}
