// Smooth scrolling to sections
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  
  // Add fade-in on scroll for sections
  const aboutSection = document.querySelector("#about");
  const projectSection = document.querySelector("#projects");
  
  const fadeInSection = (section) => {
    const sectionPos = section.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
  
    if (sectionPos < screenPos) {
      section.classList.add("fade-in");
    }
  };
  
  window.addEventListener("scroll", () => {
    fadeInSection(aboutSection);
    fadeInSection(projectSection);
  });
  