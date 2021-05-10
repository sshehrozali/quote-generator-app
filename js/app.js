// Show Current Date
let today = new Date();     // Declare new date
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let currentDate = today.toLocaleDateString(undefined, options);     // Store date

document.getElementById("today").innerText = currentDate;   // Inject into HTML




// Once page is loaded successfully
document.addEventListener("DOMContentLoaded", generateQuote);

// When button is clicked
document.getElementById("generate").addEventListener("click", generateQuote);

// Copy to clipboard
document.getElementById("copyClipboard").addEventListener("click", copyToclipboard);





// Function to generate Random Quotes
function generateQuote() {

    // Call API
    fetch("https://api.quotable.io/random")      // Returns a Promise
        .then(responseCall => responseCall.json())
        .then(fetchQuote => {

            let originalQuote = fetchQuote.content;     // Fetch Quote from JSON

            // Modify Quote formatting
            let firstQuotationMark = "'";
            let secondQuotationMark = "'";
            let hyphenSymbol = "-";

            let modifiedver = firstQuotationMark.concat(originalQuote);
            let finalVer = modifiedver.concat(secondQuotationMark);

            // Inject into HTML
            document.getElementById("displayQuote").innerText = finalVer;
            document.getElementById("author").innerText = hyphenSymbol.concat(fetchQuote.author);
        })
}

// Function to copy from clipboard
function copyToclipboard() {
    let insideTxt = document.getElementById("displayQuote").innerText;

    // Select the text field
    insideTxt.select();
    insideTxt.setSelectionRange(0, 99999);  // For Mobile Devices

    document.execCommand("copy");       // Copy text from the field
}