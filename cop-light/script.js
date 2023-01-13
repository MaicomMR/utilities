let colors = ["white", "blue", "red"];
let i = 0;
let intervalId;

function changeColor() {
  document.body.style.backgroundColor = colors[i];
  i = (i + 1) % colors.length;
}

function updateInterval() {
  clearInterval(intervalId);
  let interval = document.getElementById("intervalInput").value;
  intervalId = setInterval(changeColor, interval);
}

document.getElementById("intervalInput").addEventListener("change", updateInterval);
updateInterval();
