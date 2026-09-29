/*
 * SpendWise - JavaScript Foundation
 * This file adds the JavaScript requirements without changing
 * the existing dashboard design or CSS.
 */

// Application data stored in variables
let monthlyBudget = 50000;
let monthlySpending = 57800;
let monthlyIncome = 85000;

const currency = "KSh";
const appName = "SpendWise";

// Reusable function to calculate the remaining balance
function calculateRemainingBalance(budget, spending) {
    return budget - spending;
}

// Reusable function to calculate the percentage of budget used
function calculateBudgetUsage(budget, spending) {
    if (budget <= 0) {
        return 0;
    }

    return (spending / budget) * 100;
}

// Reusable function to display the budget result
function displayBudgetResult(budget, spending) {
    const remainingBalance = calculateRemainingBalance(budget, spending);
    const usagePercentage = calculateBudgetUsage(budget, spending);

    console.log("===== " + appName + " Budget Report =====");
    console.log("Monthly Budget: " + currency + " " + budget.toFixed(2));
    console.log("Monthly Spending: " + currency + " " + spending.toFixed(2));
    console.log("Remaining Balance: " + currency + " " + remainingBalance.toFixed(2));
    console.log("Budget Used: " + usagePercentage.toFixed(2) + "%");

    if (remainingBalance >= 0) {
        console.log("Status: You are within your budget.");
    } else {
        console.log("Status: You have exceeded your budget by " +
            currency + " " + Math.abs(remainingBalance).toFixed(2) + ".");
    }
}

// Collect user input with JavaScript prompts
function collectBudgetInput() {
    const budgetInput = prompt(
        "Enter your monthly budget in KSh:",
        monthlyBudget
    );

    const spendingInput = prompt(
        "Enter your current monthly spending in KSh:",
        monthlySpending
    );

    const budget = Number(budgetInput);
    const spending = Number(spendingInput);

    // Validate input before performing calculations
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

    monthlyBudget = budget;
    monthlySpending = spending;

    displayBudgetResult(monthlyBudget, monthlySpending);
}

// Start the SpendWise JavaScript foundation when the page loads
window.addEventListener("load", function () {
    console.log("SpendWise JavaScript loaded successfully.");
    console.log("Monthly Income: " + currency + " " + monthlyIncome.toFixed(2));

    collectBudgetInput();
});
