const container = document.getElementById("grid");
const box = document.getElementsByClassName("box");
const rainbow = document.getElementById("rainbow");
const black = document.getElementById("black");
const eraser = document.getElementById("eraser");
let color = "black";
function gridSize(size) {
  for (let i = 0; i < size ** 2; i++) {
    const div = document.createElement("div");
    div.style.flexBasis = 100 / size + "%";
    div.className = "box";
    container.appendChild(div);
  }
}
gridSize(8);

container.addEventListener("mouseover", (e) => {
  if (e.target.matches(".box")) {
    if (color === "rainbow") {
      e.target.style.backgroundColor = randomColors();
      e.target.style.opacity = Number(e.target.style.opacity) + 0.3;
    } else if (color === "black") {
      e.target.style.backgroundColor = "black";
      e.target.style.opacity = Number(e.target.style.opacity) + 0.1;
    } else if (color === "eraser") {
      e.target.style.backgroundColor = null;
      e.target.style.opacity = 0;
    }
  }
});

const button = document.getElementById("Grid-size");

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

button.addEventListener("click", () => {
  let a = prompt("type grid's size");
  if (a <= 100 && a > 0) {
    removeAllChildNodes(container);
    gridSize(a);
  } else {
    alert("number can't exceed 100 or be below 0");
  }
});
function randomColors() {
  return (
    "#" + (randomColor = Math.floor(Math.random() * 16777215).toString(16))
  );
}

rainbow.addEventListener("click", () => {
  color = "rainbow";
});

black.addEventListener("click", () => {
  color = "black";
});

eraser.addEventListener("click", () => {
  color = "eraser";
});
