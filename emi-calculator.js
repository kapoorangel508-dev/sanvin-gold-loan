// Step 1: Get HTML elements
var amountInput = document.getElementById("amount");
var rateInput = document.getElementById("rate");
var yearsInput = document.getElementById("years");

var calcBtn = document.getElementById("calcBtn");
var errorText = document.getElementById("error");

var emiText = document.getElementById("emi");
var principalText = document.getElementById("principal");
var interestText = document.getElementById("interest");
var totalText = document.getElementById("total");


// Step 2: Format currency in Indian Rupees
function formatMoney(number) {
    return "₹" + Math.round(number).toLocaleString("en-IN");
}


// Step 3: EMI Calculation Function
function calculateEMI() {

    // Get input values
    var principal = Number(amountInput.value);
    var yearlyRate = Number(rateInput.value);
    var years = Number(yearsInput.value);

    // Step 4: Validate inputs
    if (
        amountInput.value.trim() === "" ||
        rateInput.value.trim() === "" ||
        yearsInput.value.trim() === "" ||
        !Number.isFinite(principal) ||
        !Number.isFinite(yearlyRate) ||
        !Number.isFinite(years) ||
        principal <= 0 ||
        yearlyRate <= 0 ||
        years <= 0
    ) {

        errorText.textContent = "Please enter valid values greater than 0.";

        emiText.textContent = "₹0";
        principalText.textContent = "₹0";
        interestText.textContent = "₹0";
        totalText.textContent = "₹0";

        return;
    }

    // Clear previous error
    errorText.textContent = "";


    // Step 5: Convert yearly values into monthly values
    var monthlyRate = yearlyRate / 12 / 100;

    var months = years * 12;


    // Step 6: EMI Formula
    var power = Math.pow(1 + monthlyRate, months);

    var emi = (principal * monthlyRate * power) / (power - 1);


    // Step 7: Calculate total payment and interest
    var totalPayment = emi * months;

    var totalInterest = totalPayment - principal;


    // Step 8: Display results
    emiText.textContent = formatMoney(emi);

    principalText.textContent = formatMoney(principal);

    interestText.textContent = formatMoney(totalInterest);

    totalText.textContent = formatMoney(totalPayment);

}


// Step 9: Calculate EMI when button is clicked
calcBtn.addEventListener("click", calculateEMI);


// Step 10: Calculate EMI when page loads
calculateEMI();
