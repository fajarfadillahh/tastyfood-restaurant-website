// SHOW & HIDDEN HEADER MENU
const showMenu = (menuId, toggleId) => {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);

  if (menu && toggle) {
    toggle.onclick = () => {
      menu.classList.toggle("show-menu");
    };
  }
};
showMenu("nav-menu", "nav-toggle");

// CLOSE HEADER MENU WHEN WE CLICK NAV-LINK
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  navMenu.classList.remove("show-menu");
}
navLink.forEach((e) => e.addEventListener("click", linkAction));

// SCROLL SECTION ACTIVE NAV-LINK
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav__menu a[href*= ${sectionId} ]`)
        .classList.add("active-link");
    } else {
      document
        .querySelector(`.nav__menu a[href*= ${sectionId} ]`)
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// CHANGE BACKGROUND HEADER WHEN WE SCROLL DOWN
function scrollHeader() {
  const header = document.getElementById("header");
  this.scrollY >= 100
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// SHOW SCROLL TOP
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  this.scrollY >= 500
    ? scrollTop.classList.add("scroll-top")
    : scrollTop.classList.remove("scroll-top");
}
window.addEventListener("scroll", scrollTop);

// DARK/LIGHT THEME
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

// previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// we obtain the current that the interface has by validating dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

// we validate if the user previously choose a topic
if (selectedTheme) {
  // if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated dark mode
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  // add and remove dark mode
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // we save the theme and the current icon that the user choosing
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: "2000",
  reset: true,
});

// === home animation ===
sr.reveal(".home__title");
sr.reveal(".home__subtitle", { delay: 200 });
sr.reveal(".home__button", { delay: 400 });
sr.reveal(".home__img", { delay: 600 });

// === animation for section class ===
sr.reveal(".section-subtitle");
sr.reveal(".section-title", { delay: 200 });

// === about animation ===
sr.reveal(".about__img", { origin: "left" });
sr.reveal(".about__text", { delay: 200 });
sr.reveal(".about__button", { delay: 400 });

// === services & menu animation ===
sr.reveal(".services__content", { interval: 200 });
sr.reveal(".menu__content", { interval: 200 });

// === app animation ===
sr.reveal(".app__img", { origin: "left" });
sr.reveal(".app__text", { delay: 200 });
sr.reveal(".app__store", { delay: 400, interval: 200 });

// === contact animation ===
sr.reveal(".contact__text", { delay: 400 });
sr.reveal(".contact__button", { delay: 600 });
