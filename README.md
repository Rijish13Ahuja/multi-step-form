# Multi-Step Form with React

## Objective

Create a responsive multi-step form with three steps using React.js. Ensure data validation, error handling, and navigation controls are implemented.

## Requirements

1. **Form Structure:**
   - Implement a multi-step form with three steps:
     - Step 1: Personal Information (Name, Email, Phone)
     - Step 2: Address Information (Address Line 1, Address Line 2, City, State, Zip Code)
     - Step 3: Confirmation (Review all entered data)
   
2. **Navigation and Buttons:**
   - Use tabbed navigation to switch between steps.
   - Disable the back button on the first step.
   - Disable the next button on the last step and replace it with a submit button.

3. **Validation:**
   - Implement client-side validation to ensure all fields are filled before allowing navigation to the next step.
   - Display appropriate error messages if fields are empty or invalid (e.g., email format).
   - Highlight fields with errors.

4. **State Management:**
   - Manage form data using React state.
   - Use hooks like `useState` and `useEffect` where appropriate.
   - Ensure state updates reflect user inputs and form navigation.

5. **Local Storage:**
   - Persist entered data to local storage when the user navigates between steps.
   - Retrieve and pre-fill form fields if the user revisits the form.

6. **Responsive Design:**
   - Ensure the form is responsive and works well on desktop, tablet, and mobile screens.
   - Use appropriate CSS and possibly a CSS framework (like Bootstrap or Material UI) for layout and responsiveness.

7. **Bonus Points :**
   - Implement error handling for network requests (e.g., simulate API calls with `setTimeout`).
   - Enhance UX with animations or transitions between steps.
   - Write unit tests for critical components or validation functions.

 
