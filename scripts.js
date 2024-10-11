document.addEventListener('DOMContentLoaded', function () {
    // Smooth Scroll para los enlaces del menú
    const links = document.querySelectorAll('.nav-links a');
    for (const link of links) {
      link.addEventListener('click', smoothScroll);
    }
  
    function smoothScroll(e) {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  
    // Animación de entrada al hacer scroll
    const sections = document.querySelectorAll('.section');
    const options = {
      threshold: 0.2
    };
    const observer = new IntersectionObserver(animateSection, options);
  
    sections.forEach(section => {
      observer.observe(section);
    });
  
    function animateSection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }
  });
  