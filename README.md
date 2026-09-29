# SpendWise – JavaScript Foundation

## Project Overview

SpendWise is a personal finance dashboard designed to help users understand and manage their monthly budget, income, spending, savings, and expenses. The project was initially created as a visual dashboard using HTML and CSS. The dashboard contains a sidebar, financial summary cards, spending categories, recent transactions, and a monthly budget section.

For this assignment, JavaScript has been added to the existing SpendWise project. The purpose of adding JavaScript is to transform the dashboard from a mainly visual interface into a basic application that can collect information, process data, perform calculations, and display results.

The existing HTML and CSS structure has been maintained. JavaScript is added through a separate external file called `script.js`.

## Project Files

The project contains the following files:

```text
SpendWise/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

The `index.html` file contains the structure and content of the SpendWise dashboard. It includes the sidebar navigation, financial summary cards, spending categories, recent transactions, and footer.

The JavaScript file is connected externally to the HTML document using:

```html
<script src="script.js" defer></script>
```

The `defer` attribute allows the JavaScript file to load without blocking the HTML page from being displayed.

### `style.css`

The `style.css` file contains the existing visual design of the SpendWise dashboard. It uses CSS Grid for the overall dashboard and category layouts and Flexbox for different sections such as the navigation, header, and cards.

The CSS was kept separate from JavaScript so that the project follows a clear separation between structure, presentation, and behavior.

### `script.js`

The `script.js` file contains the JavaScript functionality required for this assignment. It stores budgeting information, collects user input, performs calculations, validates the input, and displays the results in the browser console.

### `README.md`

This file explains what the SpendWise project does and describes the JavaScript concepts used in the application.

---

# JavaScript Concepts Implemented

The JavaScript foundation of SpendWise demonstrates several important JavaScript concepts covered in this week's lessons.

## Variables

Variables are used to store information that the application needs to work with.

The SpendWise application stores important financial information using variables such as:

```javascript
let monthlyBudget = 50000;
let monthlySpending = 57800;
let monthlyIncome = 85000;
```

These variables represent the monthly budget, monthly spending, and monthly income.

The project also uses constants for information that does not need to change:

```javascript
const currency = "KSh";
const appName = "SpendWise";
```

The `let` keyword is used for values that can change when the user enters new information. The `const` keyword is used for values that remain constant during the program.

For example, when the user enters a different monthly budget, the value stored in `monthlyBudget` can be updated.

---

# Data Types

The application uses different JavaScript data types.

### Numbers

Financial values are stored as numbers:

```javascript
let monthlyBudget = 50000;
let monthlySpending = 57800;
let monthlyIncome = 85000;
```

Numbers are important because the application needs to perform mathematical calculations with these values.

### Strings

Text information is stored as strings:

```javascript
const currency = "KSh";
const appName = "SpendWise";
```

Strings are also used when displaying messages in the browser console.

### Boolean Results

The program uses conditions to determine whether the user's spending is within the budget or has exceeded it.

For example:

```javascript
if (remainingBalance >= 0) {
    console.log("Status: You are within your budget.");
}
```

The comparison produces a Boolean result that is either `true` or `false`.

---

# Collecting User Input

SpendWise collects information directly from the user using JavaScript's `prompt()` function.

The application asks the user to enter their monthly budget:

```javascript
const budgetInput = prompt(
    "Enter your monthly budget in KSh:",
    monthlyBudget
);
```

The application then asks the user to enter their current monthly spending:

```javascript
const spendingInput = prompt(
    "Enter your current monthly spending in KSh:",
    monthlySpending
);
```

The values returned by `prompt()` are treated as text. Since budgeting calculations require numbers, the application converts the input into numbers using `Number()`:

```javascript
const budget = Number(budgetInput);
const spending = Number(spendingInput);
```

This allows the application to use the information in mathematical calculations.

---

# Input Validation

The application checks the information entered by the user before performing calculations.

The program checks whether:

* The user cancelled the prompt.
* The entered values are valid numbers.
* The budget is not negative.
* The spending amount is not negative.

The validation helps prevent incorrect data from being used in the calculations.

For example:

```javascript
if (
    budgetInput === null ||
    spendingInput === null ||
    !Number.isFinite(budget) ||
    !Number.isFinite(spending) ||
    budget < 0 ||
    spending < 0
) {
    console.log("SpendWise: Please enter valid positive numbers for the budget and spending.");
    return;
}
```

If the input is invalid, the program stops the calculation and displays an appropriate message in the console.

---

# Budget Calculations

The main calculation performed by SpendWise is the remaining balance.

The application uses the following formula:

```text
Remaining Balance = Monthly Budget - Monthly Spending
```

This calculation is implemented using the function:

```javascript
function calculateRemainingBalance(budget, spending) {
    return budget - spending;
}
```

For example, if the monthly budget is KSh 50,000 and monthly spending is KSh 35,000:

```text
KSh 50,000 - KSh 35,000 = KSh 15,000
```

Therefore, the remaining balance is KSh 15,000.

---

# Calculating Budget Usage

SpendWise also calculates the percentage of the budget that has been used.

The formula is:

```text
Budget Used = (Monthly Spending / Monthly Budget) × 100
```

This is implemented using:

```javascript
function calculateBudgetUsage(budget, spending) {
    if (budget <= 0) {
        return 0;
    }

    return (spending / budget) * 100;
}
```

The check for a budget of zero or less prevents the application from attempting an invalid division.

For example, if the budget is KSh 50,000 and spending is KSh 25,000:

```text
(25,000 / 50,000) × 100 = 50%
```

The user has therefore used 50% of the monthly budget.

---

# Reusable Functions

Functions are used to organize the JavaScript code into smaller and reusable sections.

SpendWise contains several functions.

## `calculateRemainingBalance()`

This function calculates the amount of money remaining after spending:

```javascript
function calculateRemainingBalance(budget, spending) {
    return budget - spending;
}
```

It accepts the budget and spending as parameters and returns the calculated balance.

## `calculateBudgetUsage()`

This function calculates the percentage of the budget that has been used:

```javascript
function calculateBudgetUsage(budget, spending) {
    if (budget <= 0) {
        return 0;
    }

    return (spending / budget) * 100;
}
```

Using a function makes this calculation reusable whenever the application needs it.

## `displayBudgetResult()`

This function organizes the budget results and displays them in the browser console.

It calculates:

* Monthly budget
* Monthly spending
* Remaining balance
* Percentage of budget used
* Budget status

It also provides a different message when the user has exceeded their budget.

## `collectBudgetInput()`

This function is responsible for collecting information from the user.

It:

1. Opens the budget prompt.
2. Opens the spending prompt.
3. Converts the input to numbers.
4. Validates the information.
5. Updates the budgeting variables.
6. Sends the information to the calculation function.

Using a separate function for input makes the code easier to understand and maintain.

---

# Displaying Results

The assignment requires the calculated results to be displayed in the browser console.

SpendWise uses `console.log()` to display clearly labeled results.

The console output includes:

```text
===== SpendWise Budget Report =====
Monthly Budget: KSh 50000.00
Monthly Spending: KSh 35000.00
Remaining Balance: KSh 15000.00
Budget Used: 70.00%
Status: You are within your budget.
```

If the spending is greater than the budget, the application instead reports that the budget has been exceeded and shows the amount exceeded.

This makes it possible to verify that the JavaScript calculations are working correctly.

---

# How the Application Works

The basic flow of the SpendWise JavaScript application is:

```text
Open SpendWise
      ↓
Load script.js
      ↓
Store initial budgeting data
      ↓
Ask user for monthly budget
      ↓
Ask user for monthly spending
      ↓
Convert input to numbers
      ↓
Validate the input
      ↓
Calculate remaining balance
      ↓
Calculate percentage used
      ↓
Determine budget status
      ↓
Display results in browser console
```

This process demonstrates how JavaScript can take user input, process information, and produce useful results.

---

# Testing the Application

The application should be tested using different values to make sure the calculations work correctly.

### Test 1: Spending Below Budget

Example:

```text
Monthly Budget: KSh 50,000
Monthly Spending: KSh 30,000
```

Expected result:

```text
Remaining Balance: KSh 20,000
Budget Used: 60%
Status: You are within your budget.
```

### Test 2: Spending Equal to Budget

Example:

```text
Monthly Budget: KSh 50,000
Monthly Spending: KSh 50,000
```

Expected result:

```text
Remaining Balance: KSh 0
Budget Used: 100%
Status: You are within your budget.
```

### Test 3: Spending Above Budget

Example:

```text
Monthly Budget: KSh 50,000
Monthly Spending: KSh 60,000
```

Expected result:

```text
Remaining Balance: KSh -10,000
Budget Used: 120%
```

The application reports that the budget has been exceeded by KSh 10,000.

### Test 4: Invalid Input

The application can also be tested by entering invalid information, such as text instead of a number or a negative amount.

The program should reject the invalid input and display an error message in the browser console.

---

# How to View the Console Results

To view the JavaScript results:

1. Open `index.html` in a web browser.
2. Enter the requested budget information in the prompts.
3. Right-click on the webpage.
4. Select **Inspect**.
5. Open the **Console** tab.
6. View the SpendWise budget report.

The console will show the calculated financial information and the status of the budget.

---

# Technologies Used

The project uses:

* **HTML5** – for the structure of the SpendWise dashboard.
* **CSS3** – for the visual design, layout, CSS Grid, Flexbox, and responsive styling.
* **JavaScript** – for variables, data types, user input, calculations, validation, functions, and console output.
* **GitHub** – for storing and submitting the project repository.

---

# Assignment Requirements Completed

The JavaScript foundation addresses the assignment requirements as follows:

| Requirement                 | Implementation                                                |
| --------------------------- | ------------------------------------------------------------- |
| Set Up JavaScript           | External `script.js` file linked to `index.html`              |
| Store Application Data      | Budget, spending, income, currency, and application variables |
| Collect User Input          | JavaScript `prompt()`                                         |
| Perform Budget Calculations | Remaining balance and budget usage percentage                 |
| Create Reusable Functions   | Calculation, input, and display functions                     |
| Display Results             | Clearly labeled output using `console.log()`                  |
| README Documentation        | This README explains the project and JavaScript concepts      |

---

# Conclusion

The SpendWise project has been extended from a visual dashboard into a basic JavaScript-powered budgeting application. The JavaScript foundation demonstrates how variables can store financial information, how user input can be collected and converted into numbers, and how functions can be used to perform reusable calculations.

The application calculates the remaining budget and percentage of spending and displays the results in the browser console. The JavaScript functionality is kept in a separate `script.js` file while the existing HTML structure and CSS design remain separate.

This provides a foundation for adding more advanced SpendWise features in future development.
