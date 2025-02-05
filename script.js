// Username and Passwords
const users = {
    "Saddonti": "ana bento la mahmoudi",
    "mahmoudi": "001002003004",
    "Friend": "102030405060708090"
};

// Music Play/Pause
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

// Login Validation
document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (users[username] && users[username] === password) {
        document.getElementById("login-container").style.display = "none"; // Hide login
        document.getElementById("content").style.display = "block"; // Show content
    } else {
        alert("Invalid username or password");
    }
});
