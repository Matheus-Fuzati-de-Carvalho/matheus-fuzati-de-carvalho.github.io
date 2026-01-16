const roles = [
  "Analytics Engineering",
  "Data Engineering",
  "Cloud Pipelines",
  "SQL & BigQuery",
  "Python",
  "Power BI"
];

let i = 0, j = 0, del = false;
const el = document.getElementById("typed-text");

function type() {
  if (!del && j <= roles[i].length) {
    el.textContent = roles[i].substring(0, j++);
  } else if (del && j >= 0) {
    el.textContent = roles[i].substring(0, j--);
  }

  if (j === roles[i].length) del = true;
  if (j === 0 && del) {
    del = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(type, del ? 50 : 90);
}

type();
