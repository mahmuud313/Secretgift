// Password check
const correctCredentials = {
    'Saddonti': 'ana bento la mahmoudi',
    'mahmoudi': '001002003004',
    'Friend': '102030405060708090'
};

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (correctCredentials[username] === password) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        alert('Incorrect username or password');
    }
}

// Play/Pause Music Button
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
