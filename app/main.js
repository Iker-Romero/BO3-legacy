import { animatedBackground } from "./components/animatedBackground/animatedBackground";
import { insertFooter } from "./components/insertFooter/insertFooter";
import { insertGenerator } from "./components/insertGenerator/insertGenerator";
import { insertGuns } from "./components/insertGuns/insertGuns";
import { insertSearch } from "./components/insertSearch/insertSearch";
import { insertSection } from "./components/insertSection/insertSection";
import { insertSpecialists } from "./components/insertSpecialists/insertSpecialists";
import { navBar } from "./components/NavBar/navBar";
import { getData } from "./services/sevices";
import "./style.css";

const init = () => {
  animatedBackground();
  navBar();
  insertSection("specialists-section", "SPECIALISTS", "specialists-figures");
  insertSpecialists(
    getData("http://localhost:8080/specialists"),
    "#specialists-figures"
  );
  insertSearch("#specialists-figures", "specialists", "specialistsInput");
  insertSection("guns-section", "GUNS", "guns-figures");
  insertSearch("#guns-figures", "guns", "gunsInput");
  insertGuns(getData("http://localhost:8080/guns"), "#guns-figures");
  insertGenerator();
  insertFooter();
};

init();
