// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const dropdowns = document.querySelectorAll('.dropdown');

// Toggle the mobile menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Toggle dropdown menus on mobile
dropdowns.forEach(dropdown => {
    const dropdownBtn = dropdown.querySelector('.dropbtn');
    dropdownBtn.addEventListener('click', (e) => {
        // Prevent link default behavior and toggle the dropdown
        e.preventDefault();
        dropdown.querySelector('.dropdown-content').classList.toggle('active');
    });
});
