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