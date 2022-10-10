import { getData } from "../../services/sevices"

export const insertGuns = async () => {
  document.querySelector("#app").insertAdjacentHTML("beforeend",`
  <section class="guns" id="guns">
    <h1 class="title" >GUNS</h1>
  </section>
  `);
  const guns = await getData("http://127.0.0.1:8080/guns");
  guns.forEach(gun => {
    const gunsSection = document.querySelector("#guns");
    const getStats = () => {
      document
      let stats = document.createElement("div").classList.add("")
    }
    gunsSection.innerHTML += `
    <figure>
      <div class="gun-description">
        <figcaption>${gun.name}</figcaption>
        <h2>${gun.type}</h2>
      </div>
      <div class="image-container">
        <img src="${gun.image}" alt="" srcset="">
      </div>
      <div class="gun-stats">
        <h2>Stats:</h2>
        <p>Damage: ${gun.stats.damage}</p>
        <p>Range: ${gun.stats.range}</p>
        <p>Fire Rate: ${gun.stats["fire rate"]}</p>
        <p>Accuracy: ${gun.stats.accuracy}</p>
      </div>
    </figure>
    `
  });
}