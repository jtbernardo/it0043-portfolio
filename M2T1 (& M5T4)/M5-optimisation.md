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

# AI PROMPT
## LIST OF CRITIQUES
AI: "The function is generally understandable because it uses descriptive names and comments. However, these parts may be difficult to read:
- The nested requiredFields.forEach(function(field) { ... }) block is lengthy. The reader must follow several operations at once: finding elements, validating inputs, displaying errors, updating accessibility attributes, and changing isValid.
- The selector "#" + field.id + "-error" is not immediately obvious. The reader must understand that every input’s error element is expected to use the input’s ID followed by -error.
- The condition input.value.trim() === "" || !input.validity.valid combines two different checks: whether the field is blank and whether its format is valid. This makes the exact reason for the error less clear.
- if (!input || !error) return; silently skips a field when an element is missing. The behavior is brief but may be unclear because the reader is not told why the field is being skipped.
- The telephone validation is placed separately from the other required-field validation. A reader has to remember that isValid does not represent the telephone field’s status.
- The telephone condition is long and contains several checks in one line, which makes it harder to scan.
- The function uses return in multiple places. The reader must track that some returns stop the entire submit handler while the earlier return only skips the current forEach iteration.
- The two loops through requiredFields perform related tasks at different points in the function. This makes the overall validation and cleanup process feel repetitive.
- The attribute selector '[aria-invalid="true"]' is less immediately readable than the other selectors because its purpose depends on understanding how aria-invalid is used.
- The final closing braces and parentheses are difficult to interpret without seeing the surrounding code. It is not immediately clear which brace closes the event listener, surrounding function, or another block."

My Chosen Critique:
The condition input.value.trim() === "" || !input.validity.valid combines two different checks: whether the field is blank and whether its format is valid. This makes the exact reason for the error less clear.

# REJECTED CRITIQUES
## REASON
I only chose 1 out of the 10 critiques because I wanted to focus on one improvement that would make my code easier to read. I rejected the others because I felt they were less important or would require bigger changes to my code, as well as thinking that this was the most doable option for me as a beginner among the rest.


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


