import { clearChilds } from "../../utilities/clearChilds";
import { insertGuns } from "../insertGuns/insertGuns";
import { insertSpecialists } from "../insertSpecialists/insertSpecialists";
import { getData } from "../../services/sevices";

export const insertSearch = (ubicationID, section, id) => {
  const ubication = document.querySelector(ubicationID);
  ubication.insertAdjacentHTML(
    "beforeBegin",
    `<input type="text" class="searchInput" id="${id}" placeholder="Search..."/>`
  );

  const input = document.getElementById(id);

  input.addEventListener("input", async () => {
    try {
      const figuresArray = await getData(
        `https://bo3-legacy-json-server.onrender.com/${section}`
      );
      const filteredFigures = figuresArray.filter((figure) => {
        const name = figure.alias || figure.name;
        return name.toLowerCase().includes(input.value.toLowerCase());
      });

      if (section === "specialists") {
        clearChilds("specialists-figures");
        insertSpecialists(filteredFigures, "#specialists-figures");
      } else {
        clearChilds("guns-figures");
        insertGuns(filteredFigures, "#guns-figures");
      }
    } catch (error) {
      console.log(error);
    }
  });
};
