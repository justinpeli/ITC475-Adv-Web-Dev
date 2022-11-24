let yellowRacerCurrentlySelected = false;
let blueRacerCurrentlySelected = false;
let redRacerCurrentlySelected = false;
let bronzeRacerCurrentlySelected = false;

let yellowRacer = document.createElement("img"); 
let blueRacer = document.createElement("img");
let redRacer = document.createElement("img");
let bronzeRacer = document.createElement("img");

yellowRacer.src = "Images/Yellow Top View.png";
blueRacer.src = "Images/Blue Top View.png";
redRacer.src = "Images/Red Top View.png";
bronzeRacer.src = "Images/Bronze Top View.png";

let racerCounter = 0;

let racers = [];

let racerNumberOne = null;
let racerNumberTwo = null;

function addSelectedRacer(racer){

    switch(racer){
        case "yellow":

            if(racerCounter == 2){
                if(yellowRacerCurrentlySelected == true){
                    document.getElementById("yellowRacerSideView").style.border = "solid 5px yellow";
                    document.getElementById("yellowRacerSideView").style.backgroundColor = "yellow";
                    yellowRacerCurrentlySelected = false;
                    racerCounter--;
                }
            } else {
                if(yellowRacerCurrentlySelected == false){
                    document.getElementById("yellowRacerSideView").style.border = "solid 5px green";
                    document.getElementById("yellowRacerSideView").style.backgroundColor = "#79E484";
                    yellowRacerCurrentlySelected = true;
                    racerCounter++;
                }
                else {
                    document.getElementById("yellowRacerSideView").style.border = "solid 5px yellow";
                    document.getElementById("yellowRacerSideView").style.backgroundColor = "yellow";
                    yellowRacerCurrentlySelected = false;
                    racerCounter--;
                }
            }
            break;

        case "blue":

            if(racerCounter == 2){
                if(blueRacerCurrentlySelected == true){
                    document.getElementById("blueRacerSideView").style.border = "solid 5px yellow";
                    document.getElementById("blueRacerSideView").style.backgroundColor = "yellow";
                    blueRacerCurrentlySelected = false;
                    racerCounter--;
                }
            } else {
                if(blueRacerCurrentlySelected == false){
                    document.getElementById("blueRacerSideView").style.border = "solid 5px green";
                    document.getElementById("blueRacerSideView").style.backgroundColor = "#79E484";
                    blueRacerCurrentlySelected = true;
                    racerCounter++;
                }
                else {
                    document.getElementById("blueRacerSideView").style.border = "solid 5px yellow";
                    document.getElementById("blueRacerSideView").style.backgroundColor = "yellow";
                    blueRacerCurrentlySelected = false;
                    racerCounter--;
                }
            }
            break;

        case "red":

            if(racerCounter == 2){
                if(redRacerCurrentlySelected == true){
                    document.getElementById("redRacerSideView").style.border = "solid 5px yellow";
                    document.getElementById("redRacerSideView").style.backgroundColor = "yellow";
                    redRacerCurrentlySelected = false;
                    racerCounter--;
                }
            } else {
                if(redRacerCurrentlySelected == false){
                    document.getElementById("redRacerSideView").style.border = "solid 5px green";
                    document.getElementById("redRacerSideView").style.backgroundColor = "#79E484";
                    redRacerCurrentlySelected = true;
                    racerCounter++;
                }
                else {
                    document.getElementById("redRacerSideView").style.border = "solid 5px yellow";
                    document.getElementById("redRacerSideView").style.backgroundColor = "yellow";
                    redRacerCurrentlySelected = false;
                    racerCounter--;
                }
            }
            break;

        case "bronze":

            console.log("Bronze racer selected: " + bronzeRacerCurrentlySelected)

            if(racerCounter == 2){
                if(bronzeRacerCurrentlySelected == true){
                    document.getElementById("bronzeRacerSideView").style.border = "solid 5px yellow";
                    document.getElementById("bronzeRacerSideView").style.backgroundColor = "yellow";
                    bronzeRacerCurrentlySelected = false;
                    racerCounter--;
                }
            } else {
                if(bronzeRacerCurrentlySelected == false){
                    document.getElementById("bronzeRacerSideView").style.border = "solid 5px green";
                    document.getElementById("bronzeRacerSideView").style.backgroundColor = "#79E484";
                    bronzeRacerCurrentlySelected = true;
                    racerCounter++;
                }
                else {
                    document.getElementById("bronzeRacerSideView").style.border = "solid 5px yellow";
                    document.getElementById("bronzeRacerSideView").style.backgroundColor = "yellow";
                    bronzeRacerCurrentlySelected = false;
                    racerCounter--;
                }
            }
            break;
    }

    if (racerCounter == 2){
        document.querySelector("#raceButton").disabled = false;
    }
    else {
        document.querySelector("#raceButton").disabled = true;
    }


    if (racerCounter > 2){
        alert("Please Select Only 2 Racers!!")
    }

    console.log(racerCounter)

}

function startRace(){
    document.getElementById("CharacterSelectionWrapper").style.display = "none";
    setRacers();
    startCountDown();
}

function setRacers(){
    if(yellowRacerCurrentlySelected){
        racers.push(yellowRacer);
    }
    if(blueRacerCurrentlySelected){
        racers.push(blueRacer)
    }
    if(redRacerCurrentlySelected){
        racers.push(redRacer)
    }
    if(bronzeRacerCurrentlySelected){
        racers.push(bronzeRacer)
    }

    addRacersToGUI();
}

function addRacersToGUI(){
    racerNumberOne = racers[0];
    racerNumberTwo = racers[1];

    racerNumberOne.className = "RacerOne";
    racerNumberTwo.className = "RacerTwo";

    document.getElementById("RacerOne").appendChild(racerNumberOne);
    document.getElementById("RacerTwo").appendChild(racerNumberTwo);
}

function startCountDown(){

    for(let countDown = 3; countDown >= 0; countDown--){
        console.log(countDown)
        if (countDown == 0){
            console.log("GO");
        } else {
            displayNumber(countDown);
        }
    }
}

function displayNumber(countDown){
    let countDownElement = document.createElement("h1");
    countDownElement.innerHTML = countDown;
    countDownElement.className = "countdown";
    document.body.appendChild(countDownElement);
}