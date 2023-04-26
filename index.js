let isMenuOpen = false;
const overlay = document.getElementById("overlay");
const sideMenu = document.getElementById("sidemenu");
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

const openMenu = () => {
  isMenuOpen = !isMenuOpen;
  burger.setAttribute("data-active", isMenuOpen ? "active" : "inactive");
  toggleMenu(isMenuOpen);
};

const toggleMenu = (toggle) => {
  if (toggle) {
    overlay.style.display = "block";
    sideMenu.setAttribute("data-active", "active");
  } else {
    overlay.style.display = "none";
    sideMenu.setAttribute("data-active", "inactive");
  }
};

const closeMenu = () => {
  burger.setAttribute("data-active", "inactive");
  isMenuOpen = false;
  toggleMenu(false);
};

document.addEventListener("scroll", (e) => {
  console.log(e);
});
