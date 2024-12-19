// Navigation Smooth Scroll
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

// Dynamic Alert on Contact Form
document.querySelector(".contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! I'll get back to you shortly.");
});
