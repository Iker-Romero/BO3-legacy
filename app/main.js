import { insertGenerator } from "./components/insertGenerator/insertGenerator";
import { insertGuns } from "./components/insertGuns/insertGuns";
import { insertSpecialists } from "./components/insertSpecialists/isertSpecialists";
import { navBar } from "./components/NavBar/navBar";
import { getData } from "./services/sevices";
import "./style.css";

const init = () => {
  navBar();
  insertSpecialists(getData("http://localhost:8080/specialists"), "#specialists-section");
  insertGuns(getData("http://localhost:8080/guns"), "#guns-section");
  insertGenerator();
};

init();
