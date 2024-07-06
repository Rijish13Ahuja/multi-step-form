# Multi-Step Form with React

## Objective

Create a responsive multi-step form using React.js that allows users to enter and review their personal and address information before submission.

## Implemented Features

- **Multi-Step Structure:** Implemented a multi-step form with three sequential steps:
  - Step 1: Collects Personal Information (Name, Email, Phone)
  - Step 2: Collects Address Information (Address Line 1, Address Line 2, City, State, Zip Code)
  - Step 3: Confirmation Page to Review Entered Data before Submission

- **Navigation Controls:** 
  - Tabbed navigation for seamless transition between steps.
  - Back button disabled on the first step to prevent navigation out of sequence.
  - Next button disabled on the last step, replaced with a submit button for final form submission.

- **Data Validation:**
  - Implemented client-side validation to ensure all required fields are filled before allowing progression to the next step.
  - Displays appropriate error messages and highlights fields with validation issues for user guidance.

- **State Management:**
  - Managed form data using React state to dynamically update and reflect user inputs across steps.
  - Utilized `useState` and `useEffect` hooks for efficient state handling and updates.

- **Local Storage Integration:**
  - Persisted user-entered data to local storage to retain form state between page reloads or revisits.
  - Pre-filled form fields with previously entered data to enhance user experience and streamline form completion.

- **Responsive Design:**
  - Ensured the form layout is responsive and adaptive across various devices, including desktops, tablets, and mobile phones.
  - Utilized CSS for layout adjustments and possibly integrated a CSS framework like Bootstrap or Material UI for enhanced responsiveness.

## Additional Enhancements 

- **Error Handling for Network Requests:** Simulated API call delays using `setTimeout` to showcase error handling capabilities.
- **UX Improvements:** Enhanced user experience with subtle animations and transitions between form steps for a smoother flow.
- **Unit Testing:** Implemented unit tests for critical components and validation functions to ensure robust functionality and reliability.


