// Users and Passwords
const users = {
    Saddonti: "ana bento la mahmoudi",
    mahmoudi: "001002003004",
    Friend: "102030405060708090"
};

// Handle Login
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if username and password match
    if (users[username] && users[username] === password) {
        // Hide login and show content
        document.getElementById("login-container").style.display = "none";
        document.getElementById("content-container").style.display = "block";
    } else {
        alert("Incorrect username or password. Please try again.");
    }
});

// Play/Pause Music Button
document.getElementById("toggle-music").addEventListener("click", function() {
    const music = document.getElementById("bg-music");

    if (music.paused) {
        music.play();
        this.textContent = "Pause Music"; // Text changes to 'Pause Music' when playing
    } else {
        music.pause();
        this.textContent = "Music Player"; // Text changes back to 'Music Player' when paused
    }
});
