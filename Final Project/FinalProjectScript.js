let yellowRacerCurrentlySelected = false;
let blueRacerCurrentlySelected = false;
let redRacerCurrentlySelected = false;
let bronzeRacerCurrentlySelected = false;

let racerCounter = 0;

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

            /*
            if(racerCounter < 2){
                if(yellowRacerCurrentlySelected == false){
                    document.getElementById("yellowRacerSideView").style.border = "solid 5px green";
                    yellowRacerCurrentlySelected = true;
                    racerCounter++;
                }
                else {
                    document.getElementById("yellowRacerSideView").style.border = "solid 5px yellow";
                    yellowRacerCurrentlySelected = false;
                    racerCounter--;
                }
            }
            */
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
            
            /*
            if(racerCounter <2){
                if(blueRacerCurrentlySelected == false){
                    document.getElementById("blueRacerSideView").style.border = "solid 5px green";
                    blueRacerCurrentlySelected = true;
                    racerCounter++;
                }
                else {
                    document.getElementById("blueRacerSideView").style.border = "solid 5px yellow";
                    blueRacerCurrentlySelected = false;
                    racerCounter--;
                }
            }
            */
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

        /*
            if(racerCounter < 2){
                if(redRacerCurrentlySelected == false){
                    document.getElementById("redRacerSideView").style.border = "solid 5px green";
                    redRacerCurrentlySelected = true;
                    racerCounter++;
                }
                else {
                    document.getElementById("redRacerSideView").style.border = "solid 5px yellow";
                    redRacerCurrentlySelected = false;
                    racerCounter--;
                }
            }
            */
            break;

        case "bronze":

            if(racerCounter == 2){
                if(bronzeRacerCurrentlySelected == true){
                    document.getElementById("bronzeRacerSideView").style.border = "solid 5px yellow";
                    document.getElementById("bronzeRacerSideView").style.backgroundColor = "yellow";
                    redRacerCurrentlySelected = false;
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

            /*
            if(racerCounter < 2){
                if(bronzeRacerCurrentlySelected == false){
                    document.getElementById("bronzeRacerSideView").style.border = "solid 5px green";
                    bronzeRacerCurrentlySelected = true;
                    racerCounter++;
                }
                else {
                    document.getElementById("bronzeRacerSideView").style.border = "solid 5px yellow";
                    bronzeRacerCurrentlySelected = false;
                    racerCounter--;
                }
            }
            */
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
    document.getElementById("CharacterSelectionWrapper").style.zIndex = "-1";
}