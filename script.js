console.log ("Script started")

// Variable to track # of clicks
let clicks = 0;

//Variable to store the click display h1 element
let clickDisplay = document.getElementById ("click-display");

//Set the initial text for click count h1
clickDisplay.innerText = "Clicks: " + clicks;

//Callled each time the image is clicked
function handleClick () {
    console.log("click");
    //add one to click count
    clicks = clicks + 1;
    //update click count display h1
    clickDisplay.innerText = "Clicks: " + clicks;
}

if (clicks == 10 ) {
    let clickValue = 2;
}