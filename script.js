const roles = [
  "Analytics Engineer",
  "Data Engineer",
  "Machine Learning Engineer",
  "Data Science"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;
const typedText = document.getElementById("typed-text");

function typeEffect() {
  const current = roles[roleIndex];
  const speed = deleting ? 60 : 90;

  if (!deleting) {
    typedText.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) {
      setTimeout(() => deleting = true, 1800);
    }
  } else {
    typedText.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);
