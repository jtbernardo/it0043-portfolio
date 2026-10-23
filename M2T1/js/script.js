const navigation = document.querySelector(".navigation");
const menuButton = document.querySelector(".menu-toggle");

if (navigation && menuButton) {
    const navLinks = navigation.querySelectorAll(".nav-links a");

    // Opens or closes the mobile menu.
    function toggleMenu() {
        const isOpen = navigation.classList.toggle("is-open");
        menuButton.setAttribute("aria-expanded", isOpen);
    }
    
    // Closes the menu and then updates the button.
    function closeMenu() {
        navigation.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
    }

    menuButton.addEventListener("click", toggleMenu);

    // Closes the menu when a link is selected.
    navLinks.forEach(function(link) {
        link.addEventListener("click", closeMenu);
    });

}
