# ORIGINAL

## LONGEST FUNCTION IN JS
contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let isValid = true;

        // Checks each required field before allowing the form to proceed.
        requiredFields.forEach(function(field) {
            const input = document.querySelector("#" + field.id);
            const error = document.querySelector("#" + field.id + "-error");

            if (!input || !error) return;

            if (input.value.trim() === "" || !input.validity.valid) {
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

# AI OPTIMIZED FUNCTION
## WHAT I CHANGED FROM THE LONGEST FUNCTION USING AI'S SUGGESTION
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


