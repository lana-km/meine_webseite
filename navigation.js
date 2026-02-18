document.addEventListener("DOMContentLoaded", () => {

  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!hamburger || !navMenu) {
    console.error("Navigation elements missing");
    return;
  }

  // Toggle menu
  hamburger.addEventListener("click", () => {
    console.log("Hamburger clicked");
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  // Close on link click
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });

});
