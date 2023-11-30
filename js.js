const container = document.getElementById("container");
const div = document.createElement("div");
div.innerText = "sdasd";

for (let i = 0; i <= 256; i++) {
  const div = document.createElement("div");
  div.className = "grid";
  container.appendChild(div);
  console.log("This is repeat " + i);
}
