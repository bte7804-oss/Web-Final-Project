document.addEventListener("DOMContentLoaded", function () {

   
    const headerTitle = document.querySelector("header h1");

    if (!localStorage.getItem("visited")) {
        localStorage.setItem("visited", "true");
        console.log("First visit stored in LocalStorage");
    } else {
        if (headerTitle) {
            headerTitle.textContent += " 👋";
        }
    }

    
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            console.log("Navigation link clicked:", this.textContent);
        });
    });

});
