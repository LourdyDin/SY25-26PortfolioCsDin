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

    if (confirm("Sure You Want To Save Your Work?")) {   
        // use a predefined class to create an object of data
        const data = new FormData(form);

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

// event handler for the reset button instead of onreset on the button itself
form.addEventListener("reset", function(e) { 
  // Ask for confirmation before clearing
  if (!confirm("Sure you want to clear your data?")) {
    e.preventDefault(); // cancel the reset if user clicks "Cancel"
  }
});

// called when user is on the input field
function BlurFunction() {
    // example: reset background color of an input field
    document.getElementById("myInput").style.backgroundColor = "";
}
