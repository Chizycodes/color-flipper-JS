const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let button = document.getElementById("btn");
let color = document.querySelector(".color");

button.addEventListener("click", () => {
  let hexCode = "#";

  for (let i = 0; i < 6; i++) {
    hexCode += hex[Math.floor(Math.random() * hex.length)];
  }

  document.body.style.backgroundColor = hexCode;
  color.textContent = hexCode;
});
