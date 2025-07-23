  // Mobile-Menü Toggle
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  toggle.addEventListener('click', () => menu.classList.toggle('hidden'));

  // Scrollspy-Funktion
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  const header = document.getElementById('main-header');
  const headerInner = document.getElementById('header-inner');
  const logoImg = document.getElementById('logo-img');
  const hero = document.getElementById('start');

  let lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const heroHeight = hero.offsetHeight;

    // === Scrollspy: active-link setzen ===
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (scrollTop >= sectionTop) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach((link) => {
      link.classList.remove("active-link");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active-link");
      }
    });

    // === Header verstecken beim Runterscrollen ===
    if (scrollTop > lastScrollTop && scrollTop > 50) {
      header.classList.add('-translate-y-full');
    } else {
      header.classList.remove('-translate-y-full');
    }
    lastScrollTop = scrollTop;

    // === Shrinking Header (auch für Mobile) ===
    if (scrollTop > heroHeight - 80) {
      // Hintergrund & Text
      header.classList.remove('bg-transparent', 'text-white');
      header.classList.add('bg-white', 'shadow', 'text-gray-900');

      // Höhe & Logo
      headerInner.classList.remove('py-6', 'md:py-8');
      headerInner.classList.add('py-2', 'md:py-3');

      logoImg.classList.remove('w-24', 'md:w-28');
      logoImg.classList.add('w-16', 'md:w-20');
    } else {
      header.classList.remove('bg-white', 'shadow', 'text-gray-900');
      header.classList.add('bg-transparent', 'text-white');

      headerInner.classList.remove('py-2', 'md:py-3');
      headerInner.classList.add('py-6', 'md:py-8');

      logoImg.classList.remove('w-16', 'md:w-20');
      logoImg.classList.add('w-24', 'md:w-28');
    }
  });
