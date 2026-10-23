// FEATURE 1: MENU NAV
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

    // Closes the menu when the user clicks outside the nav.
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




// FEATURE 2: DARK MODE
// Finds all dark mode buttons.
const darkModeButtons = document.querySelectorAll(".dark-mode-toggle");

// Applies the saved color mode when the page loads.
const savedMode = localStorage.getItem("darkMode");

if (savedMode === "on") {
    document.body.classList.add("dark-mode");
}

// Updates the button text based on the current mode.
function updateDarkModeButtons() {
    darkModeButtons.forEach(function(button) {
        if (document.body.classList.contains("dark-mode")) {
            button.textContent = "Light Mode";
        } else {
            button.textContent = "Dark Mode";
        }
    });
}

// Displays the correct button text when the page loads.
updateDarkModeButtons();

// Switches the color mode when a button is clicked.
darkModeButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");

        // Saves the selected mode.
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "on");
        } else {
            localStorage.setItem("darkMode", "off");
        }

        // Updates the button text after switching modes.
        updateDarkModeButtons();
    });
});



