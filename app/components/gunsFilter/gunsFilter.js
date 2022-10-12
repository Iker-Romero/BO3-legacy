import { clearChilds } from "../../utilities/clearChilds";
import { insertGuns } from "../insertGuns/insertGuns";

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
      const guns = getData("https://bo3-legacy-json-server.onrender.com/guns");
      const filteredGuns = guns.filter((gun) => {
        return gun.type.toLowerCase().includes(event.target.value.toLowerCase());
      });
      const parent = document.querySelector("#guns-figures");
      clearChilds(parent);
      insertGuns(filteredGuns, "#guns-figures");
    } catch (error) {
      console.log(error);
    }
  });
};
