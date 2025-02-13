// Password check
const correctCredentials = {
    'Saddonti': 'ana bento la mahmoudi',
    'mahmoudi': '001002003004',
    'Friend': '102030405060708090'
};
// Function to check login
function checkLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (users[username] === password) {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("content").style.display = "block";
    } else {
        alert("Incorrect username or password. Try again!");
    }
}

// Music player functionality
let music = document.getElementById("bg-music");
let musicButton = document.getElementById("toggle-music");

musicButton.addEventListener("click", function () {
    if (music.paused) {
        music.play();
        musicButton.innerText = "Pause Music";
    } else {
        music.pause();
        musicButton.innerText = "Music Player";
    }
});

// Function to switch to countdown page
function showTimerPage() {
    document.getElementById("content").style.display = "none";
    document.getElementById("timer-page").style.display = "block";
    updateCounter();
}

// Function to go back to letter page
function showLetterPage() {
    document.getElementById("timer-page").style.display = "none";
    document.getElementById("content").style.display = "block";
}

// Countdown Timer Function (from 19/7/2024 at 10:50 PM)
function updateCounter() {
    let startDate = new Date("2024-07-19T22:50:00");
    let now = new Date();
    let diff = now - startDate;

    let months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    let weeks = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7));
    let days = Math.floor((diff % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("time-counter").innerText = 
        `${months} months, ${weeks} weeks, ${days} days, and ${hours} hours since our special moment.`;
}
