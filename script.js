// Login System
function checkLogin() {
    const users = {
        "Saddonti": "ana bento la mahmoudi",
        "mahmoudi": "001002003004",
        "Friend": "102030405060708090"
    };

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (users[username] && users[username] === password) {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("content").classList.remove("hidden");
    } else {
        document.getElementById("error-message").innerText = "Invalid username or password!";
    }
}

// Play/Pause Music Button
document.getElementById("toggle-music").addEventListener("click", function () {
    const music = document.getElementById("bg-music");
    if (music.paused) {
        music.play();
        this.textContent = "Pause Music";
    } else {
        music.pause();
        this.textContent = "Music Player";
    }
});
