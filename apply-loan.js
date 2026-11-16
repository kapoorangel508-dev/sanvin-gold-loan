let loanForm = document.getElementById("loanForm");

loanForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let mobile = document.getElementById("mobile").value.trim();

    if (!/^[6-9][0-9]{9}$/.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    let fullName = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let city = document.getElementById("city").value.trim();
    let goldWeight = document.getElementById("goldWeight").value;
    let goldPurity = document.getElementById("goldPurity").value;
    let loanAmount = document.getElementById("loanAmount").value;

    if (
        !fullName ||
        !email ||
        !city ||
        Number(goldWeight) <= 0 ||
        Number(loanAmount) <= 0 ||
        !goldPurity
    ) {
        alert("Please enter all details correctly.");
        return;
    }

    let applicationId = "GL-" + Math.floor(100000 + Math.random() * 900000);

    document.getElementById("applicationId").innerText = applicationId;

    document.getElementById("successBox").classList.add("show");

    loanForm.style.display = "none";

    document.getElementById("successBox").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});