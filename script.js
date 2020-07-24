let box = document.querySelector(".box1");
let pane = document.getElementById("pane");
let box2 = document.getElementById(".box2");
var x = 0;
var y = 0;
var x1 = 0;
var y1 = 0;
let moveBy = 1;

document.getElementById("boxes").addEventListener("click", () => {
  box.style.position = "relative";
  box.style.left = box.style.left + x;
  box.style.top = box.style.top + x1;
});
window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      x1 = parseInt(box.style.top) - moveBy;
      if (x1 <= 0) {
        x1 = x1 + 1;
      }
      box.style.top = x1 + "px";
      break;

    case "ArrowDown":
      y1 = parseInt(box.style.top) + moveBy;
      if (y1 >= 500) {
        y1 = y1 - 1;
      }
      box.style.top = y1 + "px";
      break;

    case "ArrowLeft":
      x = parseInt(box.style.left) - moveBy;
      if (x <= 0) {
        x = x + 1;
      }
      box.style.left = x + "px";
      break;

    case "ArrowRight":
      y = parseInt(box.style.left) + moveBy;
      if (y >= 500) {
        y = y - 1;
      }
      box.style.left = y + "px";
      break;
  }
});
