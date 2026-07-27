// Fade-in animation

document.addEventListener("DOMContentLoaded", () => {

const elements = document.querySelectorAll(
".doctor-card, .feature-card, .action-btn, .disease-list span"
);

const observer = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {
entry.target.classList.add("show");
}

});

}, {
threshold: 0.15
});

elements.forEach((el) => {
el.classList.add("hidden");
observer.observe(el);
});

});
