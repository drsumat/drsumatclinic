// Smooth reveal animation

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll("section").forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});

// Button click animation

document.querySelectorAll(".buttons a").forEach((button) => {
  button.addEventListener("click", () => {
    button.style.transform = "scale(.96)";

    setTimeout(() => {
      button.style.transform = "";
    }, 150);
  });
});
