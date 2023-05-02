import { clickPoint } from "./clickPoint.js";

export function randomMole() {
  const randomNumber = Math.floor(Math.random() * 12);
  const moleList = document.querySelectorAll(".game_zone__div");
  const mole = moleList[randomNumber];
  if (mole.classList.contains("taupe")) {
    mole.classList.remove("taupe");
  } else {
    mole.classList.add("taupe");
    mole.addEventListener("click", clickPoint);
  }
}
