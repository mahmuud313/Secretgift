// Spider-Man Effect
window.onload = function() {
    setTimeout(() => {
        document.getElementById("spiderman-container").classList.add("show-spiderman");
        setTimeout(() => {
            document.getElementById("spiderman-container").style.display = "none";
        }, 3000); // Spider-Man disappears after 3 seconds
    }, 500); // Wait for 0.5 seconds before showing Spider-Man
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
