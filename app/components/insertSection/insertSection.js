export const insertSection = (id, title) => {
  const app = document.querySelector("#app");
  app.innerHTML += `
  <section class="section-container" id="${id}">
      <h1 class="title">${title}</h1>
  </section>`;
};
