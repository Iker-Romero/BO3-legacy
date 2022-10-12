const contactInfo = [
  {
    name: "Iker Romero Caramés",
    socialNetworks: {
      github: {
        icon: "/github-light.png",
        link: "https://github.com/Iker-Romero",
      },
      linkedin: {
        icon: "public/174857.png",
        link: "https://www.linkedin.com/in/iker-romero-645b70251/",
      },
    },
  },
];

export const insertFooter = async () => {
  // try {
  //   await insertPlayers(getPlayers("http://localhost:3000/players"));
    const footer = `
    <footer>
      <p class="copyright">© 2022 | Developed by: ${contactInfo[0].name}.</p>
      <ul class="contact-icons">
        <li>
          <a href="${contactInfo[0].socialNetworks.github.link}" target="_blank">
            <img src="${contactInfo[0].socialNetworks.github.icon}" alt="">
          </a>
        </li>
      </ul>
    </footer>
    `
    document.body.insertAdjacentHTML("beforeend", footer)
  // } catch (error) {
  //   console.log(error);
  // }
};
