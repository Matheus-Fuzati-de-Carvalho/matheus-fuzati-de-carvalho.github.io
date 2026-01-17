const roles = [
  "Analytics Engineer",
  "Data Engineer",
  "Machine Learning",
  "Analytics & BI"
];

let i = 0;
let j = 0;
let deleting = false;
const el = document.getElementById("typed-text");

function loop() {
  const word = roles[i];
  el.textContent = deleting
    ? word.slice(0, --j)
    : word.slice(0, ++j);

  if (!deleting && j === word.length) {
    setTimeout(() => deleting = true, 1800);
  }

  if (deleting && j === 0) {
    deleting = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(loop, deleting ? 60 : 90);
}

document.addEventListener("DOMContentLoaded", loop);
