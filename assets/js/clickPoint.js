let point = 0;

export function clickPoint() {
  if (!this.classList.contains("taupe")) {
    return;
  }
  point++;
  const scoreboard = document.getElementById("scoreboard");
  scoreboard.textContent = point;
  console.log(point);
  this.classList.remove("taupe");
}
