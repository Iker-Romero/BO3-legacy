export const insertSpecialists = async (array, ubicationID) => {
  try {
    const specialists = await array;
    const figuresContainer = document.querySelector(ubicationID);
    specialists.forEach((specialist) => {
      figuresContainer.innerHTML += `
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
      // figuresContainer.insertAdjacentHTML(
      //   "beforeend",
      //   `
      //   <figure>
      //     <div class="figure-description">
      //       <figcaption>${specialist.alias}</figcaption>
      //       <h2>${specialist.name}</h2>
      //     </div>
      //     <div class="image-container">
      //       <img src="${specialist.image}" alt="" srcset="">
      //     </div>
      //   </figure>
      //   `
      // );
    });
  } catch (error) {
    console.log(error);
  }
};
