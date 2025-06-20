function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bgdColor = document.querySelector(".color");
const btn = document.querySelector(".change-color");
btn.addEventListener("click", (event) => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  bgdColor.textContent = color;
})
