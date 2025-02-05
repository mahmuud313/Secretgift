// LOGIN SYSTEM
function checkLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const users = {
        "Saddonti": "ana bento la mahmoudi",
        "mahmoudi": "001002003004",
        "Friend": "102030405060708090"
    };

    if (users[username] && users[username] === password) {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("content-container").style.display = "block";
    } else {
        document.getElementById("login-message").innerText = "Invalid Username or Password";
    }
}

// MUSIC PLAYER
document.getElementById("toggle-music").addEventListener("click", function() {
    const music = document.getElementById("bg-music");
    if (music.paused) {
        music.play();
        this.textContent = "Pause Music";
    } else {
        music.pause();
        this.textContent = "Music Player";
    }
});
