// Login System
function checkLogin() {
    const users = {
        "Saddonti": "ana bento la mahmoudi",
        "mahmoudi": "001002003004",
        "Friend": "102030405060708090"
    };

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    if (users[username] === password) {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("content").style.display = "block";
    } else {
        errorMessage.textContent = "Incorrect username or password!";
    }
}

// Music Player
document.getElementById("toggle-music").addEventListener("click", function () {
    let music = document.getElementById("bg-music");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});
