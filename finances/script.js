document.getElementById("calculate").addEventListener("click", function () {
    const income = parseFloat(document.getElementById("income").value);
    const expenses = parseFloat(document.getElementById("expenses").value);
    const savingsGoal = parseFloat(document.getElementById("savings-goal").value);

    if (isNaN(income) || isNaN(expenses) || isNaN(savingsGoal)) {
        document.getElementById("result").textContent = "Please fill out all fields correctly.";
        return;
    }

    const savings = income - expenses;
    const result = savings >= savingsGoal
        ? `You can save $${savings.toFixed(2)} per month!`
        : `You need to save $${(savingsGoal - savings).toFixed(2)} more per month.`;

    document.getElementById("result").textContent = result;
});
