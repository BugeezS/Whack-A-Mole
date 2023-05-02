import { divcreate } from "./divCreate.js";
import { randomMole } from "./moleSelector.js";

for (let i = 0; i < 12; i++) {
  divcreate();
}
setInterval(randomMole, 500);
