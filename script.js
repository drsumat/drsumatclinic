// Smooth page animation
document.addEventListener("DOMContentLoaded", () => {

    document.body.style.opacity = "0";

    document.body.style.transition = "opacity .6s ease";

    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);

});

// Button click animation
document.querySelectorAll(".actions a").forEach(button => {

    button.addEventListener("click", function () {

        this.style.transform = "scale(0.98)";

        setTimeout(() => {
            this.style.transform = "";
        }, 150);

    });

});

// Current year in footer (optional)
const footer = document.querySelector("footer");

if (footer) {
    footer.innerHTML =
        `© ${new Date().getFullYear()} Dr. Sumat Homoeopathic Care • Aude Sapere`;
}
