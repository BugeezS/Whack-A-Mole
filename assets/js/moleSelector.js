export function randomMole() {
  const randomNumber = Math.floor(Math.random() * 12);
  const moleList = document.querySelectorAll(".game_zone__div");
  const mole = moleList[randomNumber];
  mole.classList.toggle("taupe");
}
