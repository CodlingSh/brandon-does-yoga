const messageArray = window.location.search.split('&');
const messageBox = document.getElementById("messageBox");
let tempString = yogaClass = custName = date1 = date2 = date3 = custLocation = custEmail = price = ""; 

function copyText() {
    /* Get the text field */
    var copyText = document.getElementById("messageBox");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }

function dateFix(theDate) {
    let year = day = month = minute = hour = amOrPm = "";

    month = theDate.slice(7, 9);
    day = theDate.slice(12, 14);
    year = theDate.slice(0, 4);
    hour = theDate.slice(15, 17);
    minute = theDate.slice(20);
    
    // Change month number to month name
    switch (month) {
        case "01":
            month = "January";
            break;
        case "02":
            month = "February";
            break;
        case "03":
            month = "March";
            break;
        case "04":
            month = "April";
            break;
        case "05":
            month = "May";
            break;
        case "06":
            month = "June";
            break;
        case "07":
            month = "July";
            break;
        case "08":
            month = "August";
            break;
        case "09":
            month = "September";
            break;
        case "10":
            month = "October";
            break;
        case "11":
            month = "November";
            break;
        case "12":
            month = "December";
    }

    // Add AM or PM to the time
    if (hour > 12) {
        minute += " PM";
    } else {
        minute += " AM";
    }
    
    return month + " " + day + ", " + year + " at " + hour + ":" + minute; 
}

// Parse the message to be human readable
//  Grab the various parts
custLocation = messageArray[0].slice(10);
yogaClass = messageArray[1].slice(10);
date1 = messageArray[2].slice(6);
date2 = messageArray[3].slice(7);
date3 = messageArray[4].slice(7);
custName = messageArray[5].slice(5);
custEmail = messageArray[6].slice(6);

// Fix up the strings that need minor correction
yogaClass = yogaClass.replaceAll('+', ' '); // Replace + sign with a space for the class name
// Make the date mm-dd-yyyy and add time afterwards
date1 = dateFix(date1);
date2 = dateFix(date2);
date3 = dateFix(date3);
// Separate the first and last name
custName = custName.replaceAll('+', ' ');
// make the email address a proper format
custEmail = custEmail.replace("%40", '@');
// Get price
if (yogaClass == "Power Flow - 75 Minutes") {
    price = "$75.00";
} else {
    price = "$60.00"
}





// Display the message
messageBox.innerHTML += "<b>Name:</b> " + custName + "<br>";
messageBox.innerHTML += "<b>Email:</b> " + custEmail + "<br>";
messageBox.innerHTML += "<b>Class Type:</b> " + yogaClass + "<br>";
messageBox.innerHTML += "<b>Price:</b> " + price + "<br>";
messageBox.innerHTML += "<b>Class Location:</b> " + custLocation + "<br>";
messageBox.innerHTML += "<b>Preferred Date:</b> " + date1 + "<br>";
messageBox.innerHTML += "<b>Backup Date #1:</b> " + date2 + "<br>";
messageBox.innerHTML += "<b>Backup Date #2:</b> " + date3 + "<br>";
