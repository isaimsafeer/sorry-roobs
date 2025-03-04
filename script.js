document.getElementById("yesBtn").addEventListener("click", function() {
    window.location.href = "love.html"; // Redirects to another page
});

document.getElementById("noBtn").addEventListener("mouseover", function() {
    let randomX = Math.random() * window.innerWidth;
    let randomY = Math.random() * window.innerHeight;
    this.style.position = "absolute";
    this.style.left = randomX + "px";
    this.style.top = randomY + "px";
});