<<<<<<< HEAD
// read from the localStorage saved as a string - to see if there are any signups saved on the user's computer
let signupString = localStorage.getItem("signups");
if (!signupString) { 
    signups = []; // initialize the variable to contain the list of signups as an empty array
} else { 
    signups = JSON.parse(signupString); // converts string into the correct data type in this case array of objects
}

const form = document.getElementById("dForm"); // get the HTML form from Q3_2GCsDin.html

// event handler on the submit button instead of onsubmit on the button itself
form.addEventListener("submit", function(e) { // assign an event handler of submit to the form
    e.preventDefault(); // prevent page reload because forms get submitted
=======
const form = document.getElementById("dForm");
if (form)
{
form.addEventListener("submit", function(e) {
  e.preventDefault(); // stop redirect

  if (confirm("Sure You Want To Save Your Work?")) {
    const data = new FormData(form);
    const obj = Object.fromEntries(data.entries());

    // Load existing accounts (array of objects)
    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
>>>>>>> 67c852a29481b0752e68186d7b9a9e9fc54d4213

    // Add new account
    accounts.push(obj);

    // Save back to localStorage
    localStorage.setItem("accounts", JSON.stringify(accounts));

    console.log("Saved accounts:", accounts); // check in console
    alert("Account saved!");
    form.reset();
  }
});

<<<<<<< HEAD
        // Convert to object
        const obj = Object.fromEntries(data.entries()); // get all the data from the form

        // push the new signup object into the array
        signups.push(obj);

        console.log(signups); // to check all the signup information if it will be saved correctly

        signupString = JSON.stringify(signups); // convert array into string, as a requirement of localStorage
        localStorage.setItem("signups", signupString); // save on the user's computer

        alert("Signup saved successfully!");
        form.reset(); // clear the form after saving
    }
});
=======
>>>>>>> 67c852a29481b0752e68186d7b9a9e9fc54d4213

// event handler for the reset button instead of onreset on the button itself
form.addEventListener("reset", function(e) { 
  // Ask for confirmation before clearing
  if (!confirm("Sure you want to clear your data?")) {
    e.preventDefault(); // cancel the reset if user clicks "Cancel"
  }
});

<<<<<<< HEAD
// called when user is on the input field
function BlurFunction() {
    // example: reset background color of an input field
    document.getElementById("myInput").style.backgroundColor = "";
}
=======
const inputs = form.querySelectorAll("input, textarea, select");

inputs.forEach(input => {
  input.addEventListener("blur", function(e) {
    if (input.name === "about") {
        return; } // Text area is not required
    // Check if the field is empty
    if (input.value.trim() === "") {
      // Look for an existing span with class "required" next to the input
      let span = input.parentElement.querySelector(".required");

      // If none exists, create one
      if (!span) {
        span = document.createElement("span");
        span.className = "required";
        input.parentElement.appendChild(span);
      }

      // Show the asterisk
      span.textContent = " *";
      span.style.color = "red";
      span.style.fontWeight = "bold";
    } else {
      // If the field is filled, remove the asterisk
      const span = input.parentElement.querySelector(".required");
      if (span) {
        span.textContent = "";
      }
    }
  });
});
}


//for viewing page

const clubFilter = document.getElementById("clubFilter");
const accountsTable = document.getElementById("accountsTable");

function renderAccounts(filterClub = "") {
  const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
  if (!accountsTable) return;

  const tbody = accountsTable.querySelector("tbody");
  tbody.innerHTML = "";

  const filtered = filterClub
    ? accounts.filter(acc => acc.club === filterClub)
    : accounts;

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8">No accounts found.</td></tr>`;
    return;
  }

  filtered.forEach(acc => {
    const row = document.createElement("tr");
    row.innerHTML = `
  <td>${escapeHTML(acc.StudentID)}</td>
  <td>${escapeHTML(acc.fullName)}</td>
  <td>${escapeHTML(acc.emailAddress)}</td>
  <td>${escapeHTML(acc.phoneNumber)}</td>
  <td>${escapeHTML(acc.gradeLevel)}</td>
  <td>${escapeHTML(acc.status)}</td>
  <td>${escapeHTML(acc.club)}</td>
  <td>${escapeHTML(acc.about)}</td>
`;
    tbody.appendChild(row);
  });
}

// Run viewer logic only if dropdown exists
if (clubFilter) {
  renderAccounts(); // initial load
  clubFilter.addEventListener("change", function() {
    renderAccounts(this.value);
  });
}

function escapeHTML(str) {  // prevent special characters interpretation 
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
>>>>>>> 67c852a29481b0752e68186d7b9a9e9fc54d4213
