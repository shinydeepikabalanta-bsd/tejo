//validating username with more than 3 characters
const input = document.getElementById('username-input');
  const btn = document.getElementById('startBtn');

  input.addEventListener('input', () => {
    const val = input.value.trim();
    const isValid = val.length >= 3;

    btn.disabled = !isValid;
    btn.classList.toggle('ready', isValid);
  });

//draw grid
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const startBtn = document.getElementById("startBtn");

const gridSize = 20;
const cellSize = 20;

canvas.width = gridSize * cellSize;
canvas.height = gridSize * cellSize;

// hide canvas initially
canvas.style.display = "none";

function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#333";

    for (let i = 0; i <= gridSize; i++) {
        // vertical
        ctx.beginPath();
        ctx.moveTo(i * cellSize, 0);
        ctx.lineTo(i * cellSize, canvas.height);
        ctx.stroke();

        // horizontal
        ctx.beginPath();
        ctx.moveTo(0, i * cellSize);
        ctx.lineTo(canvas.width, i * cellSize);
        ctx.stroke();
    }
}

// click event
btn.addEventListener("click", () => {
    canvas.style.display = "block"; 
    drawGrid();
      const elements = document.querySelectorAll(".entry");
    elements.forEach(el => {
        el.style.display = "none";
    });                       
});

//transition from homepage to grid





