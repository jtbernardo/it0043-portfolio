// FEATURE 1: MENU NAV
const navigation = document.querySelector(".navigation");
const menuButton = document.querySelector(".menu-toggle");

if (navigation && menuButton) {
    const navLinks = navigation.querySelectorAll(".nav-links a");

    // Allows mobile users to open or close the navigation menu.
    function toggleMenu() {
        const isOpen = navigation.classList.toggle("is-open");
        menuButton.setAttribute("aria-expanded", isOpen);
    }
    
    // Keeps the navigation menu closed after users finish navigating.
    function closeMenu() {
        navigation.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
    }

    menuButton.addEventListener("click", toggleMenu);

    // Closes the menu when a navigation link is selected.
    navLinks.forEach(function(link) {
        link.addEventListener("click", closeMenu);
    });

    // Closes the menu when the user clicks outside the nav.
    document.addEventListener("click", function(event) {
        if (!navigation.contains(event.target)) {
            closeMenu();
        }
    });

    
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    // Keeps the navigation layout correct when the screen is resized.
    window.addEventListener("resize", function() {
        if (window.innerWidth > 600) {
            closeMenu();
        }
    });
}



// FEATURE 2: DARK MODE
const darkModeButtons = document.querySelectorAll(".dark-mode-toggle");
const savedMode = localStorage.getItem("darkMode");

if (savedMode === "on") {
    document.body.classList.add("dark-mode");
}

// Keeps the button labels consistent with the current color theme.
function updateDarkModeButtons() {
    darkModeButtons.forEach(function(button) {
        if (document.body.classList.contains("dark-mode")) {
            button.textContent = "Light Mode";
        } else {
            button.textContent = "Dark Mode";
        }
    });
}

updateDarkModeButtons();

// Lets users switch themes and save their preference.
darkModeButtons.forEach(function(button) {
    // Updates the theme when a user clicks the button.
    button.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "on");
        } else {
            localStorage.setItem("darkMode", "off");
        }

        updateDarkModeButtons();
    });
});



// FEATURE 3: DYNAMIC CONTENT
const achievementGallery = document.querySelector(".gallery");

if (achievementGallery) {
    const achievements = [
        {
            title: "UA Entrance Exam",
            description: "1st in the UA Entrance Exam (Villain Points)."
        },
        {
            title: "UA Sports Festival",
            description: "Champion of the UA Sports Festival."
        },
        {
            title: "Pro-Hero Dynamight",
            description: "Ranked No. 5 among Japan's Pro-Heroes."
        }
    ];

    const achievementCards =
        achievementGallery.querySelectorAll(".achievement");

    // Matches each existing achievement card with its description data.    
    achievementCards.forEach(function(card, index) {
        // Stores achievement descriptions separately from the page markup.
        const achievement = achievements[index];

        if (!achievement) return;

        const description = document.createElement("p");
        description.classList.add("achievement-description");
        description.textContent = achievement.description;

        const heading = card.querySelector("h3");

        if (heading) {
            heading.insertAdjacentElement("afterend", description);
        }
    });
}



// FEATURE 4: CONTACT FORM VALIDATION
// Checks required fields and gives users specific feedback before submission.
const contactForm = document.querySelector("#contact-form");

if (contactForm) {
    const requiredFields = [
        { id: "fname", message: "Please enter your first name." },
        { id: "lname", message: "Please enter your last name." },
        { id: "email", message: "Please enter a valid email address." },
        { id: "phone", message: "Please enter a valid mobile number." },
        { id: "sub", message: "Please enter a subject." },
        { id: "message", message: "Please enter your message." }
    ];

    // Clears outdated error feedback as users correct their input.
    requiredFields.forEach(function(field) {
        const input = document.querySelector("#" + field.id);
        const error = document.querySelector("#" + field.id + "-error");

        if (input && error) {
            // Updates field feedback while the user edits their answer.
            input.addEventListener("input", function() {
                error.textContent = "";

                if (input.validity.valid) {
                    input.removeAttribute("aria-invalid");
                }
            });
        }
    });

    // Prevents invalid submissions and provides field-specific feedback.
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let isValid = true;

        // Checks each required field before allowing the form to proceed.
        requiredFields.forEach(function(field) {
            const input = document.querySelector("#" + field.id);
            const error = document.querySelector("#" + field.id + "-error");

            if (!input || !error) return;

            const isBlank = input.value.trim() === "";
            const isInvalid = !input.validity.valid;

            if (isBlank || isInvalid) {
                error.textContent = field.message;
                input.setAttribute("aria-invalid", "true");
                isValid = false;
            } else {
                error.textContent = "";
                input.removeAttribute("aria-invalid");
            }
        });

        // Checks the optional telephone field only if it was filled in.
        const telephone = document.querySelector("#tel");
        if (telephone && telephone.value.trim() !== "" && !telephone.validity.valid) {
            alert("Please check your telephone number.");
            telephone.focus();
            return;
        }

        if (!isValid) {
            const firstInvalid = contactForm.querySelector('[aria-invalid="true"]');
            if (firstInvalid) firstInvalid.focus();
            return;
        }

        alert("Thank you! Your form has been submitted successfully!");
        contactForm.reset();

        // Clears the field errors after a successful form submission.
        requiredFields.forEach(function(field) {
            const error = document.querySelector("#" + field.id + "-error");
            if (error) error.textContent = "";
        });

        // Removes invalid-field indicators after the form is reset.
        contactForm.querySelectorAll('[aria-invalid="true"]').forEach(function(input) {
            input.removeAttribute("aria-invalid");
        });
    });
}
