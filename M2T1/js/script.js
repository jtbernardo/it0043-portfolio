
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

    requiredFields.forEach(function(field) {
        const input = document.querySelector("#" + field.id);
        const error = document.querySelector("#" + field.id + "-error");

        if (input && error) {
            input.addEventListener("input", function() {
                error.textContent = "";

                if (input.validity.valid) {
                    input.removeAttribute("aria-invalid");
                }
            });
        }
    });

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let isValid = true;

        requiredFields.forEach(function(field) {
            const input = document.querySelector("#" + field.id);
            const error = document.querySelector("#" + field.id + "-error");

            if (!input || !error) return;

            if (!input.validity.valid) {
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

        requiredFields.forEach(function(field) {
            const error = document.querySelector("#" + field.id + "-error");
            if (error) error.textContent = "";
        });

        contactForm.querySelectorAll('[aria-invalid="true"]').forEach(function(input) {
            input.removeAttribute("aria-invalid");
        });
    });
}
