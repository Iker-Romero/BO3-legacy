import { insertGuns } from "./components/insertGuns/insertGuns";
import { insertSpecialists } from "./components/insertSpecialists/isertSpecialists";
import { navBar } from "./components/NavBar/navBar";
import "./style.css";

const init = () => {
  navBar();
  insertGuns();
  insertSpecialists();
};

init();
