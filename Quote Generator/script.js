const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('Twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader')


// let apiQuotes = [];

function showLoadingSpinner() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
    if(!loader.hidden) {
    quoteContainer.hidden = false;
    loader.hidden = true;
    }
}

//show new quote
function newQuote() {
    showLoadingSpinner();
    // piok a random quote from apiquotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    //check if author field is blank and replace it with unkown
    if (!quote.author)   {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }
    // Check quote lentgh to determine styling
    if (quote.text.length > 120 ) {
        quoteText.classList.add('long-quote');

    } else {
        quoteText.classList.remove('long-quote');
    }
    // set quote, hide loader
    quoteText.textContent = quote.text;
    removeLoadingSpinner()
}
    
//Tweet a Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//Event Listerners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

 
// Get Quotes From API
// async function getQuotes() {
    
//     const apiUrl = 'https://type.fit/api/quotes';
//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();

//     } catch (error) {
        
//         //catch error here
//     }
// }

// On load
 newQuote();
