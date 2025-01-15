document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');
  
    // Ajouter un événement pour basculer le menu
    menuToggle.addEventListener('click', () => {
      navList.classList.toggle('active');
    });
  
    // Fermer le menu en cliquant en dehors
    document.addEventListener('click', (event) => {
      if (!menuToggle.contains(event.target) && !navList.contains(event.target)) {
        navList.classList.remove('active');
      }
    });
  });