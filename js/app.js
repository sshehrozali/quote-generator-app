// Show Current Date
let today = new Date();     // Declare new date
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let currentDate = today.toLocaleDateString(undefined, options);     // Store date

document.getElementById("today").innerText = currentDate;   // Inject into HTML




// Storage for quotes
let quotes = ["'That’s who you really like. The people you can think out loud in front of.'",
    "'Since we cannot know all that there is to be known about anything, we ought to know a little about everything.'",
    "'Work Smart not Hard'"]

// Set counter to 0
quoteNo = 0;

// Once page is loaded successfully
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("displayQuote").innerText = quotes[0];  // Inject into HTML
    quoteNo += 1;   // Update Quote Counter
})




// When button is clicked
document.getElementById("generate").addEventListener("click", function () {

    // Check if it reaches the end
    if (quoteNo == quotes.length) {
        quoteNo = 0;    // Reset Counter to 0
    }

    document.getElementById("displayQuote").innerText = quotes[quoteNo];    // Inject into HTML
    quoteNo += 1;   // Update Quote Counter
})