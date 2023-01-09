// STAMPA NELLA CONSOLE

console.log("hello world!");

// ESEMPIO DI CODICE PER SETTARE COME DATA DEL SITO LA DATA CORRENTE

const yearEL = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;

// ESEMPIO DI EVENTO BASATO SUL CLICK

const h1 = document.querySelector(".heading-primary");
h1.addEventListener("click", function () {
  h1.textContent = "bellaaaa";
  h1.style.backgroundColor = "red";
  h1.style.padding = "5rem";
});

// FAR FUNZIONARE IL BOTTONE DELLA NAVIGAZIONE MOBILE

const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

// METODO ANIMAZIONE DELLO SCROOL LISCIA

// qui sotto prendiamo più elementi, in queto caso tutti i link
const allLinks = document.querySelectorAll("a:link");
// qui non si può fare come prima perciò si usa un for
// il nome link è arbitrario
allLinks.forEach(function (link) {
  // la e nella function sta per event, tale lettera è arbitraria
  link.addEventListener("click", function (e) {
    // qui stiamo impedendo il normale funzionamento
    // del link in quanto andrà rimpiazzato da quello che verrà
    // deciso da noi
    e.preventDefault();
    // prendiamo l'attributo href da ogni link e lo salviamo in href
    // quindi cliccando su un determinato link otterremo il relativo href
    const href = link.getAttribute("href");

    //scroll in alto, si fa riferimento a quei link che non hanno nulle in
    //href e quindi ti riportano in alto nel sito
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // SCROLL AD ALTRI LINK
    if (href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: "smooth" });
    }

    // CHIUSURA MENU DOPO CLICK LINK
    // una volta cliccato sul link il menu viene chiuso (togliendo
    // nav-open)
    if (link.classList.contains("main-nav-link")) {
      header.classList.toggle("nav-open");
    }
  });
});

// METODO PER BARRA DI NAVIGAZIONE FISSA IN ALTO

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // root null significa che ci stiamo riferendo all'intero finestra del browser
    // in questo caso null significa che facciamo rigerimento al viewport
    root: null,
    // questo trigghera un evento appena la sezione hero avrà come
    // viewport 0, cioè uscirà dallo schermo
    threshold: 0,
    // 80px è esattamente l'altezza della barra che abbiamo settato
    // nel css
    rootMargin: "-80px",
  }
);
// inizia l'osservazione
obs.observe(sectionHeroEl);
