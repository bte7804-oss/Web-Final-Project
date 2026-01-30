document.addEventListener("DOMContentLoaded", () => {
    const likeBtn = document.getElementById("likeBtn");
    const message = document.getElementById("likeMessage");

    likeBtn.addEventListener("click", () => {
        localStorage.setItem("likedAboutPage", "true");
        message.textContent = "Thanks for the love! 💖";
    });

    if (localStorage.getItem("likedAboutPage")) {
        message.textContent = "You’ve already liked this page 💕";
    }
});