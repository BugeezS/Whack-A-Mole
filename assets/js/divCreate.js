const section = document.querySelector("section");
let i = 0;
export function divcreate() {
  if (i < 12) {
    const div = document.createElement("div");
    div.classList.add("mole" + i, "game_zone__div");
    section.appendChild(div);
    i++;
  }
}
