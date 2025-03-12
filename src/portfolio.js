document.addEventListener("DOMContentLoaded", () => {
    // Animate sections when they come into view using Intersection Observer
    const sections = document.querySelectorAll(".section");
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  