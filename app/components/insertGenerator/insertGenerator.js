import { getData } from "../../services/sevices";

export const insertGenerator = async () => {
  try {
    const app = document.querySelector("#app");
    app.innerHTML += `
    <section class="section-container" id="generator">
      <h1>GET READY</h1>
      <button id="random">Equip</button>
    </section>
    `
    const button = document.querySelector("#random");
    button.addEventListener("click", async () => {
      try {
        const specialists = await getData("http://127.0.0.1:8080/specialists");
        const randomSpecialist = specialists[Math.floor(Math.random() * specialists.length)];
        console.log(randomSpecialist)
        const guns = await getData("http://127.0.0.1:8080/guns");
        const randomGun = guns[Math.floor(Math.random() * guns.length)];
        console.log(randomGun)
      } catch (error) {
        console.log(error);
      }
    })
  } catch (error) {
    console.log(error);
  }
};
