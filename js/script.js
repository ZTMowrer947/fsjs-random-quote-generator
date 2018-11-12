// Treehouse FSJS Techdegree Unit 1 Project
// Random Quote Generator

// TODO: Add at least one `year` and/or `citation` property to at least one quote object.

// Define array of quotes
let quotes = [
    {
        // The quote itself
        quote: "When you reach the end of your rope, tie a knot in it and hang on.",
        
        // The source/speaker of the quote
        source: "Franklin D. Roosevelt",
    },
    {
        quote: "Be the change that you wish to see in the world.",
        source: "Mahatma Gandhi",
    },
    {
        quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        source: "Thomas Edison",
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        source: "Aristotle",
    },
    {
        quote: "Innovation distinguishes between a leader and a follower.",
        source: "Steve Jobs",
    },
    {
        quote: "If you can dream it, you can do it.",
        source: "Walt Disney",
    },
    {
        quote: "Most people spend more time and energy going around problems than in trying to solve them.",
        source: "Henry Ford",
    },
    {
        quote: "The direction in which education starts a man will determine his future in life.",
        source: "Plato",
    },
    {
        quote: "When anger rises, think of the consequences.",
        source: "Confucius",
    },
    {
        quote: "However difficult life may seem, there is always something you can do and succeed at.",
        source: "Stephen Hawking", // RIP 1/8/1942 - 3/14/2018
    },
];

// Random Number Generation
// Generates a random number based from 0 (inclusive) to the given maximum (exclusive)
function generateRandomNumberBetweenZeroAnd(max) {
    // Generate number between 0 and maximum
    return Math.floor(Math.random() * max); 
}

// Random Quote Retriever
// Retrieves a random quote using a random index.
function getRandomQuote() {
    // Generate random number between 0 and quote array length
    let index = generateRandomNumberBetweenZeroAnd(quotes.length);

    // Return quote at index
    return quotes[index];
}

// Quote printing function
function printQuote() {
    // Get random quote
    let quote = getRandomQuote();

    // Concatenate quote into HTML string
    let quoteHtml = "<p class=\"quote\">" + quote.quote + "</p>";

    // Append source to HTML string
    quoteHtml += "<p class=\"source\">" + quote.source;

    // Close HTML element and string
    quoteHtml += "</p>";

    // Get quote-box div
    let quoteBox = document.getElementById("quote-box");

    // Set innerHTML to HTML string
    quoteBox.innerHTML = quoteHtml;
}

// Call printQuote function when loadQuote button is clicked
document.getElementById('loadQuote').addEventListener("click", printQuote, false);