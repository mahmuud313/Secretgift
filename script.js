// Login Verification
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Define correct usernames and passwords
    const users = {
        "Saddonti": "ana bento la mahmoudi",
        "mahmoudi": "001002003004",
        "Friend": "102030405060708090"
    };

    // Check login credentials
    if (users[username] && users[username] === password) {
        // Hide login form
        document.getElementById("login-container").style.display = "none";

        // Show content and the Spider-Man image
        document.getElementById("content-container").style.display = "block";
        document.getElementById("spiderman-container").style.display = "block";

        // Spider-Man Effect
        document.getElementById("spiderman-container").classList.add("show-spiderman");
        
        setTimeout(() => {
            document.getElementById("spiderman-container").style.display = "none";
        }, 3000);
    } else {
        alert("Incorrect Username or Password");
    }
});

// Music Play/Pause Button
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
