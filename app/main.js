import { insertGenerator } from "./components/insertGenerator/insertGenerator";
import { insertGuns } from "./components/insertGuns/insertGuns";
import { insertSection } from "./components/insertSection/insertSection";
import { insertSpecialists } from "./components/insertSpecialists/insertSpecialists";
import { navBar } from "./components/NavBar/navBar";
import { getData } from "./services/sevices";
import "./style.css";

const init = () => {
  navBar();
  insertSection("specialists-section", "SPECIALISTS", "specialists-figures");
  insertSpecialists(getData("http://localhost:8080/specialists"), "#specialists-figures");
  insertSection("guns-section", "GUNS", "guns-figures");
  insertGuns(getData("http://localhost:8080/guns"), "#guns-figures");
  insertGenerator();
};

init();
