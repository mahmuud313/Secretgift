// Music Toggle Button
const bgMusic = document.getElementById("bg-music");
const toggleMusicBtn = document.getElementById("toggle-music");

toggleMusicBtn.addEventListener("click", () => {
    if (bgMusic.paused) {
        bgMusic.play();
        toggleMusicBtn.textContent = "Pause Music";
    } else {
        bgMusic.pause();
        toggleMusicBtn.textContent = "Play Music";
    }
});

// Floating Hearts Effect
setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}, 500);
