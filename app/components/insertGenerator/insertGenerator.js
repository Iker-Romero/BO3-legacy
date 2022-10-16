import { getData } from "../../services/sevices";
import { clearChilds } from "../../utilities/clearChilds";
import { insertGuns } from "../insertGuns/insertGuns";
import { insertSpecialists } from "../insertSpecialists/insertSpecialists";

export const insertGenerator = async () => {
  const app = document.querySelector("#app");
  app.insertAdjacentHTML(
    "beforeend",
    `
    <section class="section-container" id="random">
      <h1>GET READY</h1>
      <button id="generator" style="margin: 1rem auto">Equip</button>
      <div class="figures-container" id="random-figures">

      </div>
    </section>
    `
  );
  const button = document.querySelector("#generator");
  button.addEventListener("click", async () => {
    try {
      const specialists = await getData(
        "https://bo3-legacy-json-server.onrender.com/specialists"
      );
      const randomSpecialist = [
        specialists[Math.floor(Math.random() * specialists.length)],
      ];
      const guns = await getData(
        "https://bo3-legacy-json-server.onrender.com/guns"
      );
      const randomGun = [guns[Math.floor(Math.random() * guns.length)]];
      // Elimino los anteriores una vez ya está todo cargado para que no se contraiga la página en esos milisegundos
      clearChilds(document.querySelector("#random-figures"));
      insertSpecialists(randomSpecialist, "#random-figures");
      insertGuns(randomGun, "#random-figures");
    } catch (error) {
      console.log(error);
    }
  });
};
