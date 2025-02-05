// Login System
function checkLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (
        (username === "Saddonti" && password === "ana bento la mahmoudi") ||
        (username === "mahmoudi" && password === "001002003004") ||
        (username === "Friend" && password === "102030405060708090")
    ) {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("content").classList.remove("hidden");
    } else {
        document.getElementById("error-message").style.display = "block";
    }
}

// Music Player
document.getElementById("toggle-music").addEventListener("click", function() {
    let music = document.getElementById("bg-music");
    if (music.paused) {
        music.play();
        this.textContent = "Pause Music";
    } else {
        music.pause();
        this.textContent = "Music Player";
    }
});
