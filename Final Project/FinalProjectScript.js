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

let yellowRacerSide = document.createElement("img"); 
let blueRacerSide = document.createElement("img");
let redRacerSide = document.createElement("img");
let bronzeRacerSide = document.createElement("img");

yellowRacerSide.src = "Images/Yellow Side View.png";
blueRacerSide.src = "Images/Blue Side View.png";
redRacerSide.src = "Images/Red Side View.png";
bronzeRacerSide.src = "Images/Bronze Side View.png";

let racerCounter = 0;

let racers = [];

let racerNumberOne = null;
let racerNumberTwo = null;

let moveRacersInterval;

let stopLight = document.getElementById("stoplight");
let winnerWrapper = document.getElementById("winnerWrapper");

let animate;
let previousMs = 0;

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

}

function raceSetUp(){
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

    racerNumberOne.style.left = 0;
    racerNumberTwo.style.left = 0;
}

function startCountDown(){

    for(let countDown = 3; countDown >= 0; countDown--){
        if (countDown == 0){
            setTimeout(displayGo, 4000);
        } else {
            if(countDown == 3){
                setTimeout(displayNumber, 1000, countDown);
            }
            else if (countDown == 2){
                setTimeout(displayNumber, 2000, countDown);
            } 
            else if (countDown == 1){
                setTimeout(displayNumber, 3000, countDown);
            }
        }
    }
}

function displayNumber(countDown){
    let countDownElement = document.createElement("div");
    countDownElement.innerHTML = countDown;
    countDownElement.className = "CountDown";
    document.getElementById("countDownWrapper").appendChild(countDownElement);
    setTimeout(clearCountDownNumber, 1000, countDownElement);
}

function displayGo(){
    let goElement = document.createElement("div");
    goElement.innerHTML = "GO!";
    goElement.className = "CountDown";
    document.getElementById("countDownWrapper").appendChild(goElement);
    setTimeout(clearCountDownNumber, 1000, goElement);
    setLightToGreen();
    requestAnimationFrame(moveRacers);
}

function setLightToGreen(){
    document.getElementById("redlight").style.boxShadow = "0px 0px 0px 0px red"
    document.getElementById("greenlight").style.boxShadow = "0px 0px 20px 5px #65E940"
}

function clearCountDownNumber(countDownElement){
    countDownElement.remove();
}

function moveRacers(ms) {

    let racerOneRandomNumber = Math.floor(Math.random() * 11);
    let racerTwoRandomNumber = Math.floor(Math.random() * 11);
    let finishLine = document.getElementById("finishline");

    if (previousMs !== 0) {
      var delta = ms - previousMs;;
      racerNumberOne.style.left = racerNumberOne.style.left || 0;
      racerNumberOne.style.left = parseFloat(racerNumberOne.style.left) + (racerOneRandomNumber * delta / 500) + '%';

      racerNumberTwo.style.left = racerNumberTwo.style.left || 0;
      racerNumberTwo.style.left = parseFloat(racerNumberTwo.style.left) + (racerTwoRandomNumber * delta / 500) + '%';
    }
    previousMs = ms;

    if(elementsOverlap(finishLine, racerNumberOne)){
        winner = "Racer One";
        cancelAnimationFrame(moveRacers);
        displayWinner(winner);
    } 
    else if(elementsOverlap(finishLine, racerNumberTwo)){
        winner = "Racer Two";
        cancelAnimationFrame(moveRacers);
        displayWinner(winner);
    }
    else {
        requestAnimationFrame(moveRacers);
        isTouchingStopLight(elementsOverlap(racerNumberOne, stopLight));
    }
}

function elementsOverlap(el1, el2) {
    const domRect1 = el1.getBoundingClientRect();
    const domRect2 = el2.getBoundingClientRect();

    return !(
        domRect1.top > domRect2.bottom ||
        domRect1.right < domRect2.left ||
        domRect1.bottom < domRect2.top ||
        domRect1.left > domRect2.right
    );
}

function isTouchingStopLight(isTouching){
    if (isTouching){
        stopLight.style.opacity = "30%";
    }
    else {
        stopLight.style.opacity = "100%";
    }
}

function displayWinner(winner){

    let winnerText = "";
    let winnerLabel = document.createElement("div");
    let winnerImage;

    if(winner == "Racer One"){
        switch(racerNumberOne){
            case yellowRacer:
                winnerText = "Yellow Wins!";
                setWinnerLabelColor("yellow", winnerLabel);
                winnerImage = yellowRacerSide;
                break;
            case blueRacer:
                winnerText = "Blue Wins!";
                setWinnerLabelColor("blue", winnerLabel);
                winnerImage = blueRacerSide;
                break;     
            case redRacer:
                winnerText = "Red Wins!";
                setWinnerLabelColor("red", winnerLabel);
                winnerImage = redRacerSide;
                break; 
            case bronzeRacer:
                winnerText = "Bronze Wins!";
                setWinnerLabelColor("#DDAF7A", winnerLabel);
                winnerImage = bronzeRacerSide;
                break;
        }
    }
    else if (winner = "Racer Two"){
        switch(racerNumberTwo){
            case yellowRacer:
                winnerText = "Yellow Wins!";
                setWinnerLabelColor("yellow", winnerLabel);
                winnerImage = yellowRacerSide;
                break;
            case blueRacer:
                winnerText = "Blue Wins!";
                setWinnerLabelColor("blue", winnerLabel);
                winnerImage = blueRacerSide;
                break;     
            case redRacer:
                winnerText = "Red Wins!";
                setWinnerLabelColor("red", winnerLabel);
                winnerImage = redRacerSide;
                break; 
            case bronzeRacer:
                winnerText = "Bronze Wins!";
                setWinnerLabelColor("#DDAF7A", winnerLabel);
                winnerImage = bronzeRacerSide;
                break;
        }
    }
    
    winnerLabel.innerHTML = winnerText;
    document.getElementById("winnerLabel").appendChild(winnerLabel);
    document.getElementById("winnerImageDiv").appendChild(winnerImage);
    winnerWrapper.style.display = "flex";
    winnerImage.style.maxWidth = "100%";
    winnerImage.style.height = "auto";
}

function setWinnerLabelColor(color, winnerLabel){
    winnerLabel.style.color = color;
}