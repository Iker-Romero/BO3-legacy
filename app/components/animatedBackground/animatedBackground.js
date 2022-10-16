export const animatedBackground = () => {
  const app = document.querySelector("#app");
  app.insertAdjacentHTML(
    "beforeend",
    `
    <video autoplay muted loop id="animatedBackground">
      <source src="https://res.cloudinary.com/dvwva99mi/video/upload/v1665587072/BO3%20LEGACY/mylivewallpapers.com-Call-of-Duty-Black-Ops-3_nipavy.mp4" type="video/mp4">
    </video>
    `
  );
};
