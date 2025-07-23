  // 🔧 Elemente & Variablen
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  const header = document.getElementById('main-header');
  const headerInner = document.getElementById('header-inner');
  const logoImg = document.getElementById('logo-img');
  const hero = document.getElementById('start');

  let lastScrollTop = 0;

  // Menü-Toggle mobile
  toggle.addEventListener('click', () => menu.classList.toggle('hidden'));

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const heroHeight = hero.offsetHeight;

    // --- 1. Scrollspy (aktiver Link)
    let current = "";
    sections.forEach(section => {
      if (scrollTop >= section.offsetTop - 100) {
        current = section.id;
      }
    });
    navLinks.forEach(link => {
      link.classList.toggle("active-link", link.getAttribute("href") === "#" + current);
    });

    // --- 2. Header hide/show
    if (scrollTop > lastScrollTop && scrollTop > 50) {
      header.classList.add('-translate-y-full');
    } else {
      header.classList.remove('-translate-y-full');
    }
    lastScrollTop = scrollTop;

    // --- 3. Desktop-shrinking ab Hero-Ende
    const isDesktop = window.innerWidth >= 768;
    if (isDesktop && scrollTop > heroHeight - 80) {
      header.classList.replace('bg-transparent', 'bg-white');
      header.classList.add('shadow', 'text-gray-900');
      headerInner.classList.replace('py-6', 'py-2');
      logoImg.classList.replace('w-24', 'w-16');
    } else if (isDesktop) {
      header.classList.replace('bg-white', 'bg-transparent');
      header.classList.remove('shadow', 'text-gray-900');
      headerInner.classList.replace('py-2', 'py-6');
      logoImg.classList.replace('w-16', 'w-24');
    } else {
      // Mobile: bleibt immer transparent + groß
      header.classList.replace('bg-white', 'bg-transparent');
      header.classList.remove('shadow', 'text-gray-900');
      headerInner.classList.replace('py-2', 'py-6');
      logoImg.classList.replace('w-16', 'w-24');
    }
  });


