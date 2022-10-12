import { clearChilds } from "../../utilities/clearChilds";
import { insertGuns } from "../insertGuns/insertGuns";
import { insertSpecialists } from "../insertSpecialists/insertSpecialists";

export const insertSearch = (ubicationID, section, id) => {
  const ubication = document.querySelector(ubicationID);
  ubication.insertAdjacentHTML(
    "beforeBegin",
    `<input type="text" class="searchInput" id="${id}"/>`
  );
  const input = document.querySelectorAll(".searchInput")[0];

  // const input = document.querySelector("#specialistsInput");
  console.log(input)
  input.addEventListener("input", () => {
    return console.log("HOLA");
  });

  input.addEventListener("input", async () => {
    console.log("HOLA")
    try {
      console.log("hola")
      const figuresArray = await getData(
        `"http://localhost:8080/${section}"`
      );
      console.log(figuresArray);
      const filteredFigures = figuresArray.filter((figure) => {
        const name = figure.alias || figure.name;
        return name.toLowerCase().includes(input.value.toLowerCase());
      });

      console.log(filteredFigures);

      if (section === "specialists") {
        clearChilds("specialists-figures");
        insertSpecialists(filteredFigures, "#specialists-figures");
      } else {
        clearChilds("#guns-figures");
        insertGuns(filteredFigures, "#guns-figures");
      }
    } catch (error) {
      console.log(error);
    }
  });
};
