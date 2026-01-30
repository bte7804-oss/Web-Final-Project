document.addEventListener("DOMContentLoaded", () => {
    const greetingElement = document.createElement("p");
    const hour = new Date().getHours();

    let greetingText;

    if (hour < 12) {
        greetingText = "Good morning ☀️";
    } else if (hour < 18) {
        greetingText = "Good afternoon 🌤️";
    } else {
        greetingText = "Good evening 🌙";
    }

    greetingElement.textContent = greetingText;
    greetingElement.style.fontWeight = "bold";

    document.querySelector("header").appendChild(greetingElement);
});