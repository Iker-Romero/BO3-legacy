export const navBar = () => {
  const app = document.querySelector("#app");
  app.innerHTML += `
    <header>
      <nav>
        <ul>
          <li>
            <a href="#">BO3 LEGACY</a>
          </li>
          <li>
            <a href="#guns-section">Guns</a>
          </li>
          <li>
            <a href="#specialists-section">Specialists</a>
          </li>
          <li>
            <a href="#generator">Generator</a>
          </li>
        </ul>
      </nav>
    </header>
    `;
};
