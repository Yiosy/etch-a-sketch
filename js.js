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

container.addEventListener("click", (e) => {
  if (e.target.matches(".box")) {
    e.target.style.backgroundColor = "red";
  }
});
//

// function gridSize(a) {
//   gridSize = a ** 2;
//   return gridSize;
// }
// function flexBasis(a) {
//   flexBasis = 100 / a;
//   return flexBasis;
// }
let size = prompt("asd");

gridSize(size);
