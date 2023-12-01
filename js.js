const container = document.getElementById("grid");
const box = document.getElementsByClassName("box");

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.className = "box";
  container.appendChild(div);
}
container.addEventListener("click", (e) => {
  if (e.target.matches(".box")) {
    e.target.style.backgroundColor = "red";
  }
});
