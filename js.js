const container = document.getElementById("grid");
const div = document.createElement("div");
div.innerText = "sdasd";

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.className = "box";
  container.appendChild(div);
  console.log("This is repeat " + i);
}
