const users = {
    "username1": "password1",
    "username2": "password2",
    "username3": "password3"
};

function checkLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (users[username] === password) {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("content").style.display = "block";
    }
}

document.getElementById("toggle-music").addEventListener("click", function () {
    let music = document.getElementById("bg-music");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});

function updateCounter() {
    let startDate = new Date("2024-07-19T22:50:00");
    let now = new Date();
    let diff = now - startDate;
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("time-counter").innerText = `${days} days since our moment`;
}
updateCounter();
