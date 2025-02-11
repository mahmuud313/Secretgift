// Predefined usernames and passwords
const users = {
    "Saddonti": "ana bento la mahmoudi",
    "mahmoudi": "001002003004",
    "Friend": "102030405060708090"
};

// Check login credentials
function checkLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (users[username] && users[username] === password) {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("content").classList.remove("hidden");
        startCountUp();  // Start timer after login
    } else {
        alert("Incorrect username or password!");
    }
}

// Music Player
const music = document.getElementById("bg-music");
const musicButton = document.getElementById("toggle-music");

musicButton.addEventListener("click", function () {
    if (music.paused) {
        music.play();
        musicButton.textContent = "Pause Music";
    } else {
        music.pause();
        musicButton.textContent = "Music Player";
    }
});

// Time Counter (Since July 19, 2024, 10:50 PM)
function startCountUp() {
    const startTime = new Date("2024-07-19T22:50:00").getTime();

    function updateTimer() {
        const now = new Date().getTime();
        const elapsed = now - startTime;

        const months = Math.floor(elapsed / (1000 * 60 * 60 * 24 * 30));
        const weeks = Math.floor((elapsed % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7));
        const days = Math.floor((elapsed % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        document.getElementById("time-elapsed").innerHTML = 
            `${months} months, ${weeks} weeks, ${days} days, ${hours} hours`;
    }

    updateTimer();
    setInterval(updateTimer, 1000);
}
