document.addEventListener("DOMContentLoaded", () => {
  const heroImg = document.querySelector(".heroImage");
  if (!heroImg) return;

  const galleries = [
    "CDC1 1.png",
    "CDC2 1.png",
    "Cytonn Photography 1.png",
    "Diana Polekhina 1.png",
    "Diana Polekhina2 1.png",
    "Gabrielle Henderson 1.png",
    "Jacob Spaccavento 1.png",
    "Lewis Keegan 1.png",
    "Lukas Blazek 1.png",
    "Matheus Ferrero 1.png",
    "Mika Baumeister 1.png",
    "Mykenzie Johnson 1.png",
    "National Cancer Institute 1.png",
    "National Cancer Institute2 1.png",
    "Thought Catalog 1.png"
  ];

  const imagePath = "/assets/img/background/horizontal/";
  let index = 0;

  function changeBackground() {
    heroImg.style.opacity = 0;

    setTimeout(() => {
      heroImg.style.backgroundImage = `url("${imagePath}${galleries[index]}")`;
      heroImg.style.opacity = 1;
      index = (index + 1) % galleries.length;
    }, 1200); // mitad del tiempo de transición
  }

  changeBackground();
  setInterval(changeBackground, 7000); // cada 15 segundos
});