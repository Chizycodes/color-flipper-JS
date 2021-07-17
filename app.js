const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

let button = document.getElementById("btn");
let color = document.querySelector(".color");

button.addEventListener("click", () => {
  let bgColor = Math.floor(Math.random() * colors.length);

  document.body.style.backgroundColor = colors[bgColor];
  color.textContent = colors[bgColor];
});
