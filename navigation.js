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
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");

    // Optional: prevent background scroll when menu open
    const isOpen = navMenu.classList.contains("active");
    document.body.style.overflow = isOpen ? "hidden" : "";
    document.documentElement.style.overflow = isOpen ? "hidden" : "";
  });

  // Link click: close menu + enable scroll + smooth scroll to section
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");

      // Only handle in-page anchors like #home, #portfolio...
      if (!href || !href.startsWith("#")) return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault(); // stop default jump

      // Close menu
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");

      // Re-enable scrolling (IMPORTANT)
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";

      // Smooth scroll
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});
