/*
 * SpendWise - Interactive Budgeting Application
 * This JavaScript adds:
 * - Conditional statements
 * - Arrays
 * - Loops
 * - DOM manipulation
 * - Event listeners
 * - User interaction
 */

// =========================================================
// 1. APPLICATION DATA
// =========================================================

// Monthly budget and income
let monthlyBudget = 50000;
let monthlyIncome = 85000;

// Array containing multiple expense records
let expenses = [
    {
        name: "Supermarket",
        category: "Food",
        amount: 2450
    },
    {
        name: "Transport",
        category: "Transport",
        amount: 850
    },
    {
        name: "Rent",
        category: "Rent",
        amount: 18000
    },
    {
        name: "Entertainment",
        category: "Entertainment",
        amount: 3600
    },
    {
        name: "Savings",
        category: "Savings",
        amount: 8000
    },
    {
        name: "Utilities",
        category: "Utilities",
        amount: 6300
    }
];

const currency = "KSh";
const appName = "SpendWise";


// =========================================================
// 2. CALCULATE TOTAL EXPENSES
// =========================================================

// This function uses a loop to calculate all expenses
function calculateTotalExpenses() {

    let total = 0;

    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}


// =========================================================
// 3. CALCULATE BUDGET USAGE
// =========================================================

// This function calculates the percentage of the budget used
function calculateBudgetUsage(budget, spending) {

    if (budget <= 0) {
        return 0;
    }

    return (spending / budget) * 100;
}


// =========================================================
// 4. CHECK BUDGET STATUS
// =========================================================

// Conditional statements are used to evaluate the budget
function getBudgetStatus(budget, spending) {

    const usage = calculateBudgetUsage(budget, spending);

    if (spending > budget) {

        return "Warning: You have exceeded your monthly budget.";

    } else if (usage >= 80) {

        return "Be careful: You are close to reaching your budget.";

    } else if (usage >= 50) {

        return "Good progress: Keep watching your spending.";

    } else {

        return "Excellent: You are safely within your budget.";
    }
}


// =========================================================
// 5. FORMAT MONEY
// =========================================================

// This function makes money values easier to read
function formatMoney(amount) {

    return `${currency} ${amount.toLocaleString("en-KE")}`;
}


// =========================================================
// 6. UPDATE SUMMARY CARDS
// =========================================================

// This function updates information directly on the webpage
function updateSummary() {

    const totalSpending = calculateTotalExpenses();

    const remainingBalance = monthlyBudget - totalSpending;

    const usage = calculateBudgetUsage(
        monthlyBudget,
        totalSpending
    );

    const summaryCards =
        document.querySelectorAll(".summary-card");

    if (summaryCards.length >= 3) {

        // Update Total Balance
        summaryCards[0].querySelector("strong").textContent =
            formatMoney(remainingBalance);

        summaryCards[0].querySelector("small").textContent =
            "Available after expenses";

        // Update Monthly Income
        summaryCards[1].querySelector("strong").textContent =
            formatMoney(monthlyIncome);

        summaryCards[1].querySelector("small").textContent =
            "Current monthly income";

        // Update Monthly Spending
        summaryCards[2].querySelector("strong").textContent =
            formatMoney(totalSpending);

        summaryCards[2].querySelector("small").textContent =
            `${usage.toFixed(1)}% of monthly budget`;
    }
}


// =========================================================
// 7. DISPLAY BUDGET STATUS
// =========================================================

// This function displays budget feedback on the webpage
function displayBudgetStatus() {

    const totalSpending = calculateTotalExpenses();

    const statusMessage =
        getBudgetStatus(monthlyBudget, totalSpending);

    console.log(`${appName}: ${statusMessage}`);

    // Change the browser page title to show the status
    document.title = `${appName} - ${statusMessage}`;
}


// =========================================================
// 8. DISPLAY EXPENSES
// =========================================================

// This function uses a loop to process the expense array
function displayExpenses() {

    const transactionList =
        document.querySelector(".transaction-list");

    if (!transactionList) {
        return;
    }

    // Clear the old transaction records
    transactionList.innerHTML = "";

    // Loop through every expense
    for (let i = 0; i < expenses.length; i++) {

        const expense = expenses[i];

        const transaction = document.createElement("div");

        transaction.className = "transaction";

        transaction.innerHTML = `
            <div class="transaction-icon">💸</div>

            <div class="transaction-details">
                <strong>${expense.name}</strong>
                <span>${expense.category} • Added now</span>
            </div>

            <strong class="expense">
                - ${formatMoney(expense.amount)}
            </strong>
        `;

        transactionList.appendChild(transaction);
    }
}


// =========================================================
// 9. ADD A NEW EXPENSE
// =========================================================

// This function allows the user to add a new expense
function addExpense() {

    const expenseName = prompt(
        "Enter the name of your expense:"
    );

    if (expenseName === null || expenseName.trim() === "") {

        alert("Please enter an expense name.");

        return;
    }

    const category = prompt(
        "Enter the expense category:"
    );

    if (category === null || category.trim() === "") {

        alert("Please enter a category.");

        return;
    }

    const amountInput = prompt(
        "Enter the expense amount in KSh:"
    );

    const amount = Number(amountInput);

    // Validate the amount
    if (
        amountInput === null ||
        !Number.isFinite(amount) ||
        amount <= 0
    ) {

        alert("Please enter a valid amount greater than zero.");

        return;
    }

    // Add the new expense to the array
    expenses.push({
        name: expenseName.trim(),
        category: category.trim(),
        amount: amount
    });

    // Update the webpage
    updateDashboard();

    alert(
        `Expense added successfully!\n\n` +
        `${expenseName}: ${formatMoney(amount)}`
    );
}


// =========================================================
// 10. UPDATE THE COMPLETE DASHBOARD
// =========================================================

// This function connects all the features together
function updateDashboard() {

    updateSummary();

    displayExpenses();

    displayBudgetStatus();
}


// =========================================================
// 11. VIEW REPORT BUTTON
// =========================================================

// Handles the "View Report" button
function showReport() {

    const totalSpending = calculateTotalExpenses();

    const remainingBalance =
        monthlyBudget - totalSpending;

    const usage =
        calculateBudgetUsage(
            monthlyBudget,
            totalSpending
        );

    const status =
        getBudgetStatus(
            monthlyBudget,
            totalSpending
        );

    alert(
        `===== ${appName} Budget Report =====\n\n` +
        `Monthly Budget: ${formatMoney(monthlyBudget)}\n` +
        `Monthly Income: ${formatMoney(monthlyIncome)}\n` +
        `Total Spending: ${formatMoney(totalSpending)}\n` +
        `Remaining Balance: ${formatMoney(remainingBalance)}\n` +
        `Budget Used: ${usage.toFixed(1)}%\n\n` +
        `${status}`
    );
}


// =========================================================
// 12. NOTIFICATION BUTTON
// =========================================================

// Handles the notification button
function showNotification() {

    const totalSpending = calculateTotalExpenses();

    const status =
        getBudgetStatus(
            monthlyBudget,
            totalSpending
        );

    alert(
        `SpendWise Notification\n\n${status}`
    );
}


// =========================================================
// 13. NAVIGATION INTERACTIONS
// =========================================================

// Adds click events to the sidebar navigation
function setupNavigation() {

    const navItems =
        document.querySelectorAll(".nav-item");

    navItems.forEach(function (item) {

        item.addEventListener("click", function (event) {

            event.preventDefault();

            // Remove active class from all navigation items
            navItems.forEach(function (navItem) {

                navItem.classList.remove("active");

            });

            // Add active class to clicked item
            item.classList.add("active");

            alert(
                `${item.textContent.trim()} section selected.`
            );
        });
    });
}


// =========================================================
// 14. CATEGORY CARD INTERACTION
// =========================================================

// Adds an event to each category card
function setupCategoryCards() {

    const categoryCards =
        document.querySelectorAll(".category-card");

    categoryCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const categoryName =
                card.querySelector("h3").textContent;

            const categoryExpenses =
                expenses.filter(function (expense) {

                    return expense.category.toLowerCase() ===
                        categoryName.toLowerCase();

                });

            let total = 0;

            // Loop through matching expenses
            for (let i = 0; i < categoryExpenses.length; i++) {

                total += categoryExpenses[i].amount;
            }

            alert(
                `${categoryName}\n\n` +
                `Total recorded spending: ${formatMoney(total)}`
            );
        });
    });
}


// =========================================================
// 15. CREATE AN ADD EXPENSE BUTTON
// =========================================================

// The original HTML does not contain an Add Expense button.
// Therefore JavaScript creates one without changing index.html.
function createAddExpenseButton() {

    const categories =
        document.querySelector(".categories");

    if (!categories) {
        return;
    }

    const button =
        document.createElement("button");

    button.textContent = "＋ Add Expense";

    button.type = "button";

    button.style.marginBottom = "20px";
    button.style.padding = "10px 16px";
    button.style.border = "none";
    button.style.borderRadius = "10px";
    button.style.cursor = "pointer";
    button.style.fontWeight = "bold";

    button.addEventListener("click", addExpense);

    categories.insertBefore(
        button,
        categories.querySelector(".category-grid")
    );
}


// =========================================================
// 16. EVENT LISTENERS
// =========================================================

// Wait until the webpage is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    console.log(
        `${appName} JavaScript loaded successfully.`
    );

    // Update dashboard when page loads
    updateDashboard();

    // Create Add Expense button
    createAddExpenseButton();

    // Set up navigation events
    setupNavigation();

    // Set up category card events
    setupCategoryCards();

    // View Report button
    const viewButton =
        document.querySelector(".view-button");

    if (viewButton) {

        viewButton.addEventListener(
            "click",
            showReport
        );
    }

    // Notification button
    const notificationButton =
        document.querySelector(".notification-button");

    if (notificationButton) {

        notificationButton.addEventListener(
            "click",
            showNotification
        );
    }

});
