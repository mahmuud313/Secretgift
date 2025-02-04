// Usernames and passwords
const users = {
    "Saddonti": "ana bento la mahmoudi",
    "mahmoudi": "001002003004",
    "Friend": "102030405060708090"
};

// Function to handle login
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the username and password match
    if (users[username] && users[username] === password) {
        // Hide login form and show the content
        document.getElementById("login-form").style.display = "none";
        document.getElementById("content").style.display = "block";
    } else {
        // Show error message
        document.getElementById("error-message").style.display = "block";
    }
}

// Listen for the login button click event
document.getElementById("login-button").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    login();
});

// Spider-Man Effect - Appears Instantly
window.onload = function() {
    document.getElementById("spiderman-container").classList.add("show-spiderman");
    setTimeout(() => {
        document.getElementById("spiderman-container").style.display = "none";
    }, 3000);
};

// Play/Pause Music Button
document.getElementById("toggle-music").addEventListener("click", function() {
    const music = document.getElementById("bg-music");
    if (music.paused) {
        music.play();
        this.textContent = "Pause Music";
    } else {
        music.pause();
        this.textContent = "Play Music";
    }
});
