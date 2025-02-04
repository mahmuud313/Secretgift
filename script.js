// User credentials
const users = [
    { username: 'Saddonti', password: 'ana bento la mahmoudi' },
    { username: 'mahmoudi', password: '001002003004' },
    { username: 'Friend', password: '102030405060708090' }
];

// Handle login
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Hide login form and show content
        document.getElementById("login-container").style.display = "none";
        document.getElementById("letter-container").classList.remove("hidden");
    } else {
        alert("Invalid username or password.");
    }
});

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

// Spider-Man Effect
window.onload = function() {
    document.getElementById("spiderman-container").classList.add("show-spiderman");
    setTimeout(() => {
        document.getElementById("spiderman-container").style.display = "none";
    }, 3000);
};
