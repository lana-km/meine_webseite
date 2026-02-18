// Navigation functionality
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Safety checks (prevent JS from crashing)
  if (!navbar || !hamburger || !navMenu) {
    console.warn('Navigation elements not found:', { navbar, hamburger, navMenu });
    return;
  }

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });

  // Mobile menu toggle
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close mobile menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // Highlight active link based on scroll position
  function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');

      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
      if (!navLink) return;

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add('active');
      } else {
        navLink.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', highlightNavigation);
  highlightNavigation(); // run once on load
}

// Make it available globally (no-module mode)
window.initNavigation = initNavigation;

// ✅ Auto-start (this is the missing piece)
document.addEventListener('DOMContentLoaded', initNavigation);
