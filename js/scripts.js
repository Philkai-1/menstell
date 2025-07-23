  // Mobile-Menü Toggle
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  toggle.addEventListener('click', () => menu.classList.toggle('hidden'));

  // Scrollspy-Funktion
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active-link");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active-link");
      }
    });
  });

  // Navbar ausblenden beim Runterscrollen
  let lastScrollTop = 0;
  const header = document.getElementById('main-header');

  window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Verstecke Header beim Runterscrollen
    if (scrollTop > lastScrollTop && scrollTop > 50) {
      header.classList.add('-translate-y-full');
    } else {
      header.classList.remove('-translate-y-full');
    }
    lastScrollTop = scrollTop;

    // === NEU: Hintergrundfarbe ab Hero-Ende hinzufügen ===
    const hero = document.getElementById('start');
    const heroHeight = hero.offsetHeight;

    if (scrollTop > heroHeight - 80) {
      header.classList.remove('bg-transparent', 'text-white');
      header.classList.add('bg-white', 'shadow', 'text-gray-900');
    } else {
      header.classList.remove('bg-white', 'shadow', 'text-gray-900');
      header.classList.add('bg-transparent', 'text-white');
    }
  });

