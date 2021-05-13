
function addUser() {
    
    if (password == "lala123") {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
} else {
  window.location = "index.html";
}

}
