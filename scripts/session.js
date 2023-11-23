let radios = document.getElementsByName("yogaClass");
const messageBox = document.getElementById("messageBox");
let selectedClass = "";
let price = 0;

for (let i = 0; i < radios.length; i++) {   
    
    radios[i].addEventListener("click", function(event){
       selectedClass = radios[i].value

        // Update the total value
        if (selectedClass == "Power Flow - 60 Minutes") {
            price = 60;
        } else if (selectedClass == "Power Flow - 75 Minutes") {
            price = 75;
        } else if (selectedClass == "Restorative - 60 Minutes") {
            price = 60;
        }

        document.getElementById("total").innerHTML = "$" + price + ".00";    
    })
}





