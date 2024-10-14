// Function to toggle mobile navigation menu
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    if (mobileNav.style.display === 'flex') {
      mobileNav.style.display = 'none';
    } else {
      mobileNav.style.display = 'flex';
    }
  }
  function toggleMenu() {
    const navMenu = document.querySelector('nav ul');
    const hamburger = document.querySelector('.hamburger');
  
    navMenu.classList.toggle('active');  // Toggle the 'active' class for the menu
    hamburger.classList.toggle('active'); // Animate hamburger icon to 'X'
  }
  
  