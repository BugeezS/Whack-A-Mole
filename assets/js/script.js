import { divcreate } from "./divCreate.js";
import { randomMole } from "./moleSelector.js";
const intervalSelect = document.getElementById("interval-select");

intervalSelect.addEventListener("change", () => {
  const selectedValue = intervalSelect.value;
  clearInterval(intervalId);
  intervalId = setInterval(randomMole, selectedValue);
});

let intervalId = setInterval(randomMole, 500);

for (let i = 0; i < 12; i++) {
  divcreate();
}
