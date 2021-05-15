var = "lala123";

function addUser() {
    
    if (password == var) {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}
}
