  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const header = document.getElementById('main-header');
  const headerInner = document.getElementById('header-inner');
  const logoImg = document.getElementById('logo-img');
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  const hero = document.getElementById('start');

  let lastScrollTop = 0;

  // Mobile-Menü öffnen/schließen
  toggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const heroHeight = hero.offsetHeight;

    // Scrollspy: Aktiven Link setzen
    let current = "";
    sections.forEach(section => {
      if (scrollTop >= section.offsetTop - 100) {
        current = section.id;
      }
    });
    navLinks.forEach(link => {
      link.classList.toggle("active-link", link.getAttribute("href") === "#" + current);
    });

    // Header Hide/Show bei Scrollrichtung
    if (scrollTop > lastScrollTop && scrollTop > 50) {
      header.classList.add('-translate-y-full');
    } else {
      header.classList.remove('-translate-y-full');
    }
    lastScrollTop = scrollTop;

    const isDesktop = window.innerWidth >= 768;

    if (isDesktop) {
      if (scrollTop > heroHeight - 80) {
        // Nach Scroll: weißer BG, Schatten, kleiner Header, dunkle Schrift
        header.classList.remove('bg-transparent', 'text-white');
        header.classList.add('bg-white', 'shadow', 'text-gray-900');
        headerInner.classList.remove('py-6', 'md:py-8');
        headerInner.classList.add('py-2', 'md:py-3');
        logoImg.classList.remove('w-24', 'md:w-28');
        logoImg.classList.add('w-16', 'md:w-20');
        navLinks.forEach(link => {
          link.classList.remove('text-white');
          link.classList.add('text-gray-900', 'hover:bg-gray-200', 'hover:text-gray-900');
        });
      } else {
        // Oberhalb Hero: transparent, groß, weiße Schrift
        header.classList.add('bg-transparent', 'text-white');
        header.classList.remove('bg-white', 'shadow', 'text-gray-900');
        headerInner.classList.add('py-6', 'md:py-8');
        headerInner.classList.remove('py-2', 'md:py-3');
        logoImg.classList.add('w-24', 'md:w-28');
        logoImg.classList.remove('w-16', 'md:w-20');
        navLinks.forEach(link => {
          link.classList.add('text-white');
          link.classList.remove('text-gray-900', 'hover:bg-gray-200', 'hover:text-gray-900');
        });
      }
    } else {
      // Mobile immer transparent, große Schrift
      header.classList.add('bg-transparent', 'text-white');
      header.classList.remove('bg-white', 'shadow', 'text-gray-900');
      headerInner.classList.add('py-6', 'md:py-8');
      headerInner.classList.remove('py-2', 'md:py-3');
      logoImg.classList.add('w-24', 'md:w-28');
      logoImg.classList.remove('w-16', 'md:w-20');
      navLinks.forEach(link => {
        link.classList.add('text-white');
        link.classList.remove('text-gray-900', 'hover:bg-gray-200', 'hover:text-gray-900');
      });
    }
  });


