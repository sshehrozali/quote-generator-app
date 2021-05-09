// Show Current Date
let today = new Date();     // Declare new date
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let currentDate = today.toLocaleDateString(undefined, options);     // Store date

document.getElementById("today").innerText = currentDate;   // Inject into HTML




// Once page is loaded successfully
document.addEventListener("DOMContentLoaded", generateQuote);

// When button is clicked
document.getElementById("generate").addEventListener("click", generateQuote);






// Function to generate Random Quotes
function generateQuote() {

    // Call API
    fetch("http://api.quotable.io/random")      // Returns a Promise
        .then(responseCall => responseCall.json())
        .then(fetchQuote => {

            let originalQuote = fetchQuote.content;     // Fetch Quote from JSON

            // Modify Quote formatting
            let firstQuotationMark = "'";
            let secondQuotationMark = "'";

            let modifiedver = firstQuotationMark.concat(originalQuote);
            let finalVer = modifiedver.concat(secondQuotationMark);

            document.getElementById("displayQuote").innerText = finalVer;       // Inject into HTML
        })
}