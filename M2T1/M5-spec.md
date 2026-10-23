# PRECODE

## Feature 1: Navigation Toggle

**Trigger:**  
The user clicks the menu button on a mobile screen.

**Expected DOM Change:**  
The navigation links will show when the menu is opened and hide when it is closed. The button will also update to show whether the menu is open or closed.

**Edge Cases:**
- The user clicks the menu button multiple times.
- The user clicks one of the navigation links.
- The screen changes from mobile to desktop while the menu is open.
- The user tries to use the menu with a keyboard.
- The menu button or navigation menu is missing.

**Pseudocode:**
1. Find the menu button and navigation menu.
2. Make the button respond when clicked.
3. Check if the menu is open or closed.
4. If the menu is closed, then open it. If it is open, then close it.
5. Update the button to show if the menu is open or closed.
6. Close the menu when the user clicks a navigation link.
7. Make sure the navigation still works when the screen size changes.



## Feature 2: Dark Mode

**Trigger:**  
The user clicks the dark mode button.

**Expected DOM Change:**  
The website changes to dark mode when the button is clicked. Clicking it again changes the website back to its normal colors.

**Edge Cases:**
- The user clicks the button many times.
- The user switches between dark mode and normal mode.
- The button is missing.
- The text becomes difficult to read because of the colors.
- The user opens another page of the website.

**Pseudocode:**
1. Find the dark mode button.
2. Make the button respond when clicked.
3. Check if dark mode is turned on or off.
4. If it is off, then turn it on. If it is on, then turn it off.
5. Change the website colors based on the selected mode.
6. Make sure the text is still easy to read.
7. Check that the dark mode works on the other pages too.



## Feature 3: Dynamic Content from an Array

**Trigger:**  
The webpage loads and needs to show the achievement cards.

**Expected DOM Change:**  
The achievement cards will be added to the webpage using information from a list in JavaScript.

**Edge Cases:**
- The list has no items.
- Some information in the list is missing.
- An image cannot be loaded.
- The webpage cannot find the area where the cards should appear.

**Pseudocode:**
1. Create a list containing the information for each achievement.
2. Find the area on the Skills page where the cards should appear.
3. Check if the list has any items.
4. Use the list to create an achievement card for each item.
5. Add the cards to the webpage.
6. Check what happens if the list is empty.
7. Make sure the page still works if an image cannot be loaded.



## Feature 4: Contact Form Validation

**Trigger:**  
The user clicks the submit button on the contact form.

**Expected DOM Change:**  
If a required field is empty or contains invalid information, an error message will appear beside that field. The form will not be submitted until the errors are fixed.

**Edge Cases:**
- The user leaves a required field empty.
- The user enters an invalid email address.
- The user enters only spaces in a required field.
- The user fixes an error and submits the form again.
- The form or one of its fields is missing.
- The user submits the form with all the required fields filled in correctly.

**Pseudocode:**
1. Find the contact form and its fields.
2. Check the form when the user clicks the submit button.
3. Check if any required fields are empty.
4. Check if the email address is valid.
5. Show an error message beside each field that has a problem.
6. Stop the form from submitting if there are errors.
7. Remove the error messages when the user fixes the problems.
8. Allow the form to submit when all required fields are valid.



# REVISION (UPDATED VER. FROM AI SUGGESTIONS)

## Feature 1: Navigation Toggle

**Trigger:**  
The user clicks the menu button on a mobile screen.

**Expected DOM Change:**  
The navigation links will show when the menu is opened and hide when it is closed. The button will also update to show whether the menu is open or closed.

**Edge Cases:**
- The user clicks the menu button multiple times.
- The user clicks outside the menu while it is open.
- The user presses Escape while the menu is open.
- The user clicks one of the navigation links.
- The screen changes from mobile to desktop while the menu is open.
- The user tries to use the menu with a keyboard.
- The menu button or navigation menu is missing.

**Pseudocode:**
1. Find the menu button and navigation menu.
2. Make the button respond when clicked.
3. Check if the menu is open or closed.
4. If the menu is closed, then open it. If it is open, then close it.
5. Update the button to show if the menu is open or closed.
6. Close the menu when the user clicks outside it or presses Escape.
7. Close the menu when the user clicks a navigation link.
8. Make sure the navigation still works when the screen size changes.



## Feature 2: Dark Mode

**Trigger:**  
The user clicks the dark mode button.

**Expected DOM Change:**  
The website changes to dark mode when the button is clicked. Clicking it again changes the website back to its normal colors. The website will remember the selected mode when the user refreshes the page or opens another page.

**Edge Cases:**
- The user clicks the button multiple times.
- The user switches between dark mode and normal mode.
- The button is missing.
- The text or buttons become difficult to read because of the colors.
- The user opens another page of the website.
- The user refreshes the page.

**Pseudocode:**
1. Find the dark mode button.
2. Check if a mode was saved from the user's previous visit.
3. If a mode was saved, apply it. Otherwise, use the normal colors.
4. Make the button respond when clicked.
5. Check if dark mode is turned on or off.
6. Switch to the other mode when the button is clicked.
7. Save the selected mode.
8. Make sure the text is still easy to read.
9. Check that the selected mode works on the other pages too.



## Feature 3: Dynamic Content from an Array

**Trigger:**  
The webpage loads and needs to show the achievement cards.

**Expected DOM Change:**  
The achievement cards will be added to the webpage using information from a list in JavaScript. If the list is empty, the page will show a message saying there are no achievements to display.

**Edge Cases:**
- The list has no items.
- Some information in the list is missing.
- An image cannot be loaded.
- The webpage cannot find the area where the cards should appear.
- The cards are added more than once.
- An achievement has a long name or description.

**Pseudocode:**
1. Create a list containing the information for each achievement.
2. Find the area on the Skills page where the cards should appear.
3. Check if the list has any items.
4. If the list is empty, show a message saying there are no achievements to display.
5. If the list has items, create an achievement card for each item.
6. Add the cards to the webpage without showing duplicates.
7. Make sure the page still works if an image cannot be loaded.
8. Check that the text still displays properly if it is long.



## Feature 4: Contact Form Validation

**Trigger:**  
The user clicks the submit button on the contact form.

**Expected DOM Change:**  
If a required field is empty or contains invalid information, an error message will appear beside that field. The form will not be submitted until the errors are fixed. If all fields are valid, a message will appear saying, "Your form has been submitted successfully!"

**Edge Cases:**
- The user leaves a required field empty.
- The user enters an invalid email address.
- The user enters only spaces in a required field.
- The user fixes one error while other errors remain.
- The user submits the form multiple times.
- The form or one of its fields is missing.
- The user submits the form with all required fields filled in correctly.
- The form submission fails.

**Pseudocode:**
1. Find the contact form and its fields.
2. Check the form when the user clicks the submit button.
3. Check if any required fields are empty or contain only spaces.
4. Check if the email address is valid.
5. Show an error message beside each field that has a problem.
6. Stop the form from submitting if there are errors.
7. Remove the error messages when the user fixes the problems.
8. If all fields are valid, show the success message.
9. If submission fails, show an error message instead.