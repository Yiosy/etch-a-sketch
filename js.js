const container = document.getElementById("grid");
const box = document.getElementsByClassName("box");

function gridSize(size) {
  for (let i = 0; i < size ** 2; i++) {
    const div = document.createElement("div");
    div.style.flexBasis = 100 / size + "%";
    div.className = "box";
    container.appendChild(div);
  }
}
gridSize(8);

container.addEventListener("click", (e) => {
  if (e.target.matches(".box")) {
    e.target.style.backgroundColor = "red";
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
  if (a <= 100) {
    removeAllChildNodes(container);
    gridSize(a);
  } else {
    alert("number can't exceed 100");
  }
});
