// Smooth scroll functionality for navigation links
document.querySelectorAll('.nav-link').forEach(function(navLink) {
    navLink.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
// Smooth scroll functionality for navigation links
document.querySelectorAll('.btn-get-started').forEach(function(navLink) {
    navLink.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
// Smooth scroll functionality for navigation links
document.querySelectorAll('.project-btn').forEach(function(navLink) {
    navLink.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  
  // Toggle the visibility of the menu when the menu icon is clicked
  document.querySelector('.mobile-nav-toggle').addEventListener('click', function() {
    document.querySelector('.navbar ul').classList.toggle('active');
  });
  

