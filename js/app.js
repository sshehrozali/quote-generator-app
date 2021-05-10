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

    // Reset copy to clipboard button
    document.getElementById("copyClipboard").innerText = "📋";
    document.getElementById("copyClipboard").classList.remove("copied");

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

// Function to copy to clipboard
function copyToclipboard() {

    let r = document.createRange();

    r.selectNode(document.getElementById("displayQuote"));      // Get <p> tag
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);

    document.execCommand("copy");       // Copy to clipboard
    window.getSelection().removeAllRanges();

    document.getElementById("copyClipboard").innerText = "Copied!";
    document.getElementById("copyClipboard").classList.add("copied");
}