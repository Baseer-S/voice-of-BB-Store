// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkmode-toggle");
    
    if (darkModeToggle) {
      darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
      });
    }
  
    // Scroll Animation for Product Cards
    const elements = document.querySelectorAll(".product-card");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.5 } // Trigger animation when 50% of the element is visible
    );
  
    elements.forEach((el) => observer.observe(el));
  });
  