// Step 1: Demo data (a real website would get this from a server/database)
// "stage" tells us how far the application has reached:
// 0 = Submitted, 1 = Documents Verified, 2 = Approved, 3 = Amount Disbursed
var applications = {
  SV1001: {
    name: "Rahul Sharma",
    type: "Gold Loan",
    date: "2 Nov 2026",
    stage: 1
  },
  SV1002: {
    name: "Priya Verma",
    type: "Personal Loan",
    date: "28 Oct 2026",
    stage: 2
  },
  SV1003: {
    name: "Amit Kumar",
    type: "Business Loan",
    date: "15 Oct 2026",
    stage: 3
  }
};

// Step 2: The list of steps shown on the page
var stepNames = [
  "Application Submitted",
  "Documents Verified",
  "Loan Approved",
  "Amount Disbursed"
];

// Step 3: Get the elements from the HTML using their ids
var appIdInput = document.getElementById("appId");
var trackBtn = document.getElementById("trackBtn");
var errorText = document.getElementById("error");
var resultBox = document.getElementById("resultBox");

var resId = document.getElementById("resId");
var resName = document.getElementById("resName");
var resType = document.getElementById("resType");
var resDate = document.getElementById("resDate");
var resStatus = document.getElementById("resStatus");
var stepsList = document.getElementById("steps");

// Step 4: Main function - runs when the button is clicked
function trackApplication() {
  // Read the ID, remove extra spaces and make it capital letters
  var id = appIdInput.value.trim().toUpperCase();

  // Check if the box is empty
  if (id === "") {
    errorText.textContent = "Please enter your application ID.";
    resultBox.hidden = true;
    return;
  }

  // Look for this ID in our demo data
  var application = applications[id];

  // If nothing is found, show an error
  if (application === undefined) {
    errorText.textContent = "No application found. Please check the ID.";
    resultBox.hidden = true;
    return;
  }

  // If we reach here, the ID is valid
  errorText.textContent = "";

  // Show the basic details
  resId.textContent = id;
  resName.textContent = application.name;
  resType.textContent = application.type;
  resDate.textContent = application.date;
  resStatus.textContent = stepNames[application.stage];

  // Build the steps list
  var stepsHTML = "";

  for (var i = 0; i < stepNames.length; i++) {
    var className = "";

    if (i < application.stage) {
      className = "done";      // finished steps
    } else if (i === application.stage) {
      className = "current";   // step happening now
    }

    stepsHTML += '<li class="' + className + '">' + stepNames[i] + "</li>";
  }

  stepsList.innerHTML = stepsHTML;

  // Finally, show the result box
  resultBox.hidden = false;
}

// Step 5: Run the function when the button is clicked
trackBtn.addEventListener("click", trackApplication);

// Bonus: also run it when the user presses Enter inside the input box
appIdInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    trackApplication();
  }
});
