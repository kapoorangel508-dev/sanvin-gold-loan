const LTV = 0.80;

function calculateEligibleGold() {
    let weight = parseFloat(document.getElementById("eligibleWeight").value);
    let purity = parseFloat(document.getElementById("eligiblePurity").value);
    let goldRate = parseFloat(document.getElementById("eligibleRate").value);

    if (
        isNaN(weight) ||
        isNaN(purity) ||
        isNaN(goldRate) ||
        weight <= 0 ||
        goldRate <= 0
    ) {
        alert("Please enter a valid gold weight and gold rate.");
        return;
    }

    let pureGoldRate = goldRate * (purity / 24);
    let goldValue = weight * pureGoldRate;
    let eligibleLoan = goldValue * LTV;

    document.getElementById("goldValueResult").innerText =
        "₹" + goldValue.toLocaleString("en-IN", {
            maximumFractionDigits: 2
        });

    document.getElementById("eligibleLoanResult").innerText =
        "₹" + eligibleLoan.toLocaleString("en-IN", {
            maximumFractionDigits: 2
        });

    document.getElementById("eligibleResult").classList.add("show");
}

function calculateRequiredGold() {
    let loanAmount = parseFloat(document.getElementById("requiredLoanAmount").value);
    let purity = parseFloat(document.getElementById("requiredPurity").value);
    let goldRate = parseFloat(document.getElementById("requiredRate").value);

    if (
        isNaN(loanAmount) ||
        isNaN(purity) ||
        isNaN(goldRate) ||
        loanAmount <= 0 ||
        goldRate <= 0
    ) {
        alert("Please enter a valid loan amount and gold rate.");
        return;
    }

    let pureGoldRate = goldRate * (purity / 24);
    let loanPerGram = pureGoldRate * LTV;
    let requiredGold = loanAmount / loanPerGram;

    document.getElementById("requiredGoldResult").innerText =
        requiredGold.toLocaleString("en-IN", {
            maximumFractionDigits: 2
        }) + " grams";

    document.getElementById("requiredResult").classList.add("show");
}