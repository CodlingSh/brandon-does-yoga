// Variables
const quote = document.getElementById('quote');
const author = document.getElementById('author');

// Calculate how many days in the year we are 
function howManyDays(date) {
    // Variables
    const year = date.getFullYear()
    const day = date.getDate();
    const month = date.getMonth();
    let isLeap = false;
    let totalDays = 0;
    let daysOfMonth = [0,31,28,31,30,31,30,31,31,30,31,30];

    // Calculate if leap year and add a day to February (index 2)
    if (year % 4 == 0) {
        if (year % 100 != 0) {
            daysOfMonth[2] = 29;
        } else if (year % 400) {
            daysOfMonth[2] = 29;
        }
    }

    // Add up all the days in the month and break when at current month
    for (let i = 0; i < daysOfMonth.length; i++){
        totalDays += daysOfMonth[i]
        if (i == month){
            totalDays += day;
            break;
        }
    }

    return totalDays;
}

// Function to get the file
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

// Usage of the file goes below
readTextFile("quotes.json", function(text){
    var quoteArray = JSON.parse(text);
    const numDays = howManyDays(new Date());
    const numQuotes = Object.keys(quoteArray.quotes).length;

    quote.innerText = quoteArray.quotes[numDays%numQuotes].quote;
    author.innerText = "- " + quoteArray.quotes[numDays%numQuotes].author;
});