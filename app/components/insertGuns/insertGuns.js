export const insertGuns = async (array, idUbication) => {
  // document.querySelector("#app").insertAdjacentHTML(
  //   "beforeend",
  //   `
  //   <section class="section-container" id="guns-section">
  //     <h1 class="title" >GUNS</h1>
  //     <div class="figures-container" id="guns-figures">

  //     </div>
  //   </section>
  //   `
  //   );
  const guns = await array;
  guns.forEach((gun) => {
    const figuresContainer = document.querySelector(idUbication);
    figuresContainer.innerHTML += `
      <figure>
        <div class="figure-description">
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
    `;
  });
};
