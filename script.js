function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

document.addEventListener('click', function(event) {
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    if (!navLinks.contains(event.target) && !menuIcon.contains(event.target) && !closeIcon.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});