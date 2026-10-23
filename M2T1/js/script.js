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

    // Closes the menu when the user clicks outside it.
    document.addEventListener("click", function(event) {
        if (!navigation.contains(event.target)) {
            closeMenu();
        }
    });

    // Closes the menu when Escape button is pressed on the keyboard.
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    // Resets the menu when the screen returns to desktop size.
    window.addEventListener("resize", function() {
        if (window.innerWidth > 600) {
            closeMenu();
        }
    });
}
