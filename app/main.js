import { insertGuns } from "./components/insertGuns/insertGuns";
import { navBar } from "./components/NavBar/navBar";
import "./style.css";

const init = () => {
  navBar();
  insertGuns();
};

init();
