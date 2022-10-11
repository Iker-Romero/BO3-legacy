export const insertSpecialists = async (array, ubication) => {
  try {
    const specialists = await array;
    console.log(specialists)
    console.log(ubication)
    const target = document.querySelector(ubication);
    const div = document.createElement("div");
    div.className = "figures-container";
    div.id = "specialists-figures"
    target.insertAdjacentHTML("beforeend", `<div class="figures-container" id="specialists-figures"></div>`)
    specialists.forEach((specialist) => {
      const specialistsSection = document.querySelector("#specialists-figures");
      specialistsSection.innerHTML += `
      <figure>
        <div class="figure-description">
          <figcaption>${specialist.alias}</figcaption>
          <h2>${specialist.name}</h2>
        </div>
        <div class="image-container">
          <img src="${specialist.image}" alt="" srcset="">
        </div>
      </figure>
      `;
    });
  } catch (error) {
    console.log(error);
  }
};
