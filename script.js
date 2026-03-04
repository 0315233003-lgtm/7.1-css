console.log ("Script started")

// Variable to track # of clicks
let clicks = 0;
let clickValue = 1;

//Variable to store the click display h1 element
let clickDisplay = document.getElementById ("click-display");

//Variable to store the level 
let levelDisplay = document.getElementById("level-display");

//Set the initial text for click count h1
clickDisplay.innerText = "Clicks: " + clicks;

//Callled each time the image is clicked
function handleClick () {
    console.log("click");

    //add one to click count
    clicks = clicks + clickValue;

    //update click count display h1
    clickDisplay.innerText = "Clicks: " + clicks;

    //Check if we're at level 2
    if (clicks == 10 ) {
        alert("Congrats, You've reached Level 2!");
        levelDisplay.innerText = "Level 2";
        clickValue = 2;

    }

}

