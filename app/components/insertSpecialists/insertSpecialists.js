export const insertSpecialists = async (array, idUbicacion) => {
  try {
    const specialists = await array;
    // console.log(specialists);
    // console.log(idUbicacion);
    // console.log(target)
    // const div = document.createElement("div");
    // div.className = "figures-container";
    // div.id = "specialists-figures";
    // target.insertAdjacentHTML("beforeend", div);
    // target.appendChild(div);
    // console.log(div)
    // const specialistsSection = document.getElementById("specialists-figures")
    const figuresContainer = document.querySelector(idUbicacion);
    specialists.forEach((specialist) => {
      figuresContainer.insertAdjacentHTML(
        "beforeend",
        `
      <figure>
        <div class="figure-description">
          <figcaption>${specialist.alias}</figcaption>
          <h2>${specialist.name}</h2>
        </div>
        <div class="image-container">
          <img src="${specialist.image}" alt="" srcset="">
        </div>
      </figure>
      `
      );
    });
  } catch (error) {
    console.log(error);
  }
};
