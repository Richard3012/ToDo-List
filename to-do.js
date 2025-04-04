const cursorBall = document.querySelector(".cursor-ball");
let mouseX = 0;
let mouseY = 0;
let ballX = 0;
let ballY = 0;
let isCursorVisible = false;

// Track mouse position
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  // Show cursor ball when mouse is moving
  if (!isCursorVisible) {
    cursorBall.style.opacity = "1";
    isCursorVisible = true;
  }
});

// Hide cursor ball when mouse leaves window
document.addEventListener("mouseleave", () => {
  cursorBall.style.opacity = "0";
  isCursorVisible = false;
});

// Show cursor ball when mouse returns to window
document.addEventListener("mouseenter", () => {
  cursorBall.style.opacity = "1";
  isCursorVisible = true;
});

// Animation loop for delayed movement
function animate() {
  // Calculate delayed position (easing effect)
  const distX = mouseX - ballX;
  const distY = mouseY - ballY;

  // Adjust the 0.2 value to change delay amount
  ballX = ballX + distX * 0.2;
  ballY = ballY + distY * 0.2;

  // Update cursor ball position
  cursorBall.style.left = `${ballX}px`;
  cursorBall.style.top = `${ballY}px`;

  requestAnimationFrame(animate);
}

// Start animation
animate();


const listContainer = $("#task-container");
const inputBox = $("input-box");

$("button").on("click", function () {
  const task = inputBox.val().trim();
  if (!task) return alert("Write something");
});