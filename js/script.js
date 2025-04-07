
let currentIndex = 0;

function scrollCards(id,direction) {
  const cardRow = document.getElementById(id);
  const cardWidth = cardRow.children[0].offsetWidth; 
  const totalCards = cardRow.children.length;
  const maxIndex = totalCards - 4;

  currentIndex += direction;

  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > maxIndex) currentIndex = maxIndex;

  cardRow.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}


document.addEventListener('DOMContentLoaded', function() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  
  // Function to close all dropdowns
  function closeAllDropdowns() {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      menu.classList.remove('show');
    });
    document.querySelectorAll('.dropdown, .dropdown-submenu').forEach(item => {
      item.classList.remove('show');
    });
  }
  
  // Handle navbar toggler click
  navbarToggler.addEventListener('click', function() {
    const isNavbarCollapsed = document.querySelector('#navbarNavDropdown').classList.contains('show');
    
    if (isNavbarCollapsed) {
      // When navbar is expanded (mobile view), make dropdowns click-to-open
      dropdownToggles.forEach(toggle => {
        toggle.setAttribute('data-bs-toggle', 'dropdown');
      });
    } else {
      // When navbar is collapsed, remove click behavior
      dropdownToggles.forEach(toggle => {
        toggle.removeAttribute('data-bs-toggle');
      });
      closeAllDropdowns();
    }
  });
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.navbar-nav') && window.innerWidth < 992) {
      closeAllDropdowns();
    }
  });
});
