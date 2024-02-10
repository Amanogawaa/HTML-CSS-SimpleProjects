const initApp = () => {
  const hamburger = document.getElementById("hamburger-menu");
  const mobile = document.getElementById("mobile-menu");

  const toggleMenu = () => {
    mobile.classList.toggle("hidden");
    mobile.classList.toggle("flex");
    hamburger.classList.toggle("toggle-btn");
  };

  hamburger.addEventListener("click", toggleMenu);
  mobile.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);
