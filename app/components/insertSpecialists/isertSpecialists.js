import { getData } from "../../services/sevices";

export const insertSpecialists = async () => {
  try {
    document.querySelector("#app").insertAdjacentHTML("beforeend",`
    <section class="section-container" id="specialists-section">
      <h1 class="title" >SPECIALISTS</h1>
    </section>
    `);
    const specialists = await getData("http://127.0.0.1:8080/specialists");
    specialists.forEach(specialist => {
      const specialistsSection = document.querySelector("#specialists-section");
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
      `
    });
  } catch (error) {
    console.log(error);
  }
}