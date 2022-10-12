export const insertSection = (sectionID, title, divID) => {
  const app = document.querySelector("#app");
  app.innerHTML += `
  <section class="section-container" id="${sectionID}">
      <h1 class="title">${title}</h1>
      <div class="figures-container" id="${divID}">
      
      </div>
  </section>`;
};
