import { divcreate } from "./divCreate.js";
import { randomMole } from "./moleSelector.js";
import { clickPoint } from "./clickPoint.js";

document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < 12; i++) {
    divcreate();
  }
  setInterval(randomMole, 500);

  const taupe = document.querySelector(".taupe");
  taupe.addEventListener("click", clickPoint);

  console.log(taupe);
});
