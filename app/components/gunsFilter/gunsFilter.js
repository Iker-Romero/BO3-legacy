import { clearChilds } from "../../utilities/clearChilds";
import { insertGuns } from "../insertGuns/insertGuns";
import { getData } from "../../services/sevices";

export const gunsFilter = () => {
  const input = document.querySelector("#gunsInput");
  input.insertAdjacentHTML(
    "afterend",
    `
  <select name="gunsFilter" id="gunsFilter">
    <option value="">Type of gun:</option>
    <option value="Submachine Gun">Submachine Gun</option>
    <option value="Assault Rifle">Assault Rifle</option>
    <option value="Sniper Rifle">Sniper Rifle</option>
  </select>
  `
  );
  const select = document.querySelector("#gunsFilter");
  select.addEventListener("change", async (event) => {
    try {
      const guns = await getData("https://bo3-legacy-json-server.onrender.com/guns");
      const filteredGuns = guns.filter((gun) => {
        return gun.type
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      });
      clearChilds("guns-figures");
      insertGuns(filteredGuns, "#guns-figures");
    } catch (error) {
      console.log(error);
    }
  });
};
