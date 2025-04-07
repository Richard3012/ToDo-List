console.log("Script running");
const cursorBall = document.querySelector(".cursor-ball");
let mouseX = 0;
let mouseY = 0;
let ballX = 0;
let ballY = 0;
let isCursorVisible = false;

// Mouse tracking
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  if (!isCursorVisible) {
    cursorBall.style.opacity = "1";
    isCursorVisible = true;
  }
});

document.addEventListener("mouseleave", () => {
  cursorBall.style.opacity = "0";
  isCursorVisible = false;
});

document.addEventListener("mouseenter", () => {
  cursorBall.style.opacity = "1";
  isCursorVisible = true;
});

function animate() {
  const distX = mouseX - ballX;
  const distY = mouseY - ballY;

  ballX = ballX + distX * 0.07;
  ballY = ballY + distY * 0.07;

  cursorBall.style.left = `${ballX}px`;
  cursorBall.style.top = `${ballY}px`;

  requestAnimationFrame(animate);
}

animate();

// ToDo logic
const taskContainer = $("#task-container");
const inputTitle = $("#input-title");
const inputBox = $("#input-box");
const addBtn = $("#add-btn");

addBtn.on("click", function (event) {
  event.preventDefault();

  const title = inputTitle.val().trim();
  const task = inputBox.val().trim();
  if (!task || !title) return alert("Please enter both Title and Task");

  const li = $("<li>").html(
    `<strong>${title}</strong><br>${task}<span>&times;</span>`
  );
  taskContainer.append(li);

  inputTitle.val("");
  inputBox.val("");
  saveData();
});

taskContainer.on("click", "li", function () {
  $(this).toggleClass("done");
  saveData();
});

taskContainer.on("click", "span", function (event) {
  event.stopPropagation();
  $(this).parent().remove();
  saveData();
});

function saveData() {
  localStorage.setItem("data", taskContainer.html());
}

function showTask() {
  const savedData = localStorage.getItem("data");
  if (savedData) taskContainer.html(savedData);
}

showTask();
