import { getData } from "../../services/sevices";
import { insertSpecialists } from "../insertSpecialists/isertSpecialists";

export const insertGenerator = async () => {
  const app = document.querySelector("#app");
  app.innerHTML += `
    <section class="section-container" id="generator">
      <h1>GET READY</h1>
      <button id="random">Equip</button>
      <div class="section-container" id="equip-generated">
  
      </div>
    </section>
    `;
  const button = document.querySelector("#random");
  button.addEventListener("click", async () => {
    try {
      const specialists = await getData("http://127.0.0.1:8080/specialists");
      const randomSpecialist = specialists[Math.floor(Math.random() * specialists.length)];
      insertSpecialists(randomSpecialist, )
      console.log(randomSpecialist);
      const guns = await getData("http://127.0.0.1:8080/guns");
      const randomGun = guns[Math.floor(Math.random() * guns.length)];
      console.log(randomGun);
    } catch (error) {
      console.log(error);
    }
  });
};
