document.addEventListener("DOMContentLoaded", function() {
    // Heart Animation
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.querySelector(".hearts").appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
    setInterval(createHeart, 300);

    // Background Music Control
    const bgMusic = document.getElementById("bg-music");
    document.addEventListener("click", () => bgMusic.play());
});
