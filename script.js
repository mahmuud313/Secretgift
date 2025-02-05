// Login System
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
        document.getElementById("main-content").classList.remove("hidden");
    } else {
        document.getElementById("error-message").textContent = "Invalid username or password.";
    }
}

// Music Player
document.getElementById("toggle-music").addEventListener("click", function() {
    const music = document.getElementById("bg-music");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});
