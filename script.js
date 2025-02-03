// Spider-Man Effect
window.onload = function() {
    setTimeout(() => {
        document.getElementById("spiderman-container").classList.add("show-spiderman");
        setTimeout(() => {
            document.getElementById("spiderman-container").style.display = "none";
        }, 3000);
    }, 500);
};

// Music Toggle
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
