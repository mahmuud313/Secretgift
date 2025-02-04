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
