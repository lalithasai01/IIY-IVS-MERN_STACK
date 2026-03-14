const form = document.getElementById("taskForm");
const planner = document.getElementById("weeklyPlanner");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const streakText = document.getElementById("streak");
const themeToggle = document.getElementById("themeToggle");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let streak = Number(localStorage.getItem("streak")) || 0;

/* Theme */
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

themeToggle.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
};

/* Render Week */
function renderPlanner() {
  planner.innerHTML = "";
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  days.forEach((day) => {
    const col = document.createElement("div");
    col.className = "day-column";
    col.innerHTML = `<strong>${day}</strong>`;

    tasks
      .filter((t) => t.day === day)
      .forEach((t) => {
        const div = document.createElement("div");
        div.className = "task";
        div.textContent = `${t.subject}: ${t.name}`;
        col.appendChild(div);
      });

    planner.appendChild(col);
  });

  updateProgress();
}

/* Add Task */
form.addEventListener("submit", (e) => {
  e.preventDefault();

  tasks.push({
    subject: subject.value,
    name: task.value,
    date: date.value,
    day: day.value,
    completed: false,
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
  streak++;
  localStorage.setItem("streak", streak);
  renderPlanner();
  form.reset();
});

/* Progress */
function updateProgress() {
  if (!tasks.length) {
    progressFill.style.width = "0%";
    progressText.textContent = "0% Completed";
  } else {
    progressFill.style.width = "100%";
    progressText.textContent = "100% Planned";
  }
  streakText.textContent = `🔥 Study Streak: ${streak} days`;
}

renderPlanner();
