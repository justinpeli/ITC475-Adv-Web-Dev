let runButton = document.getElementById("run-button");

let livingRoomLamp = null;
let livingRoomLampJSON = null;

let bedroomDeskLamp = null;
let bedroomDeskLampJSON = null;

let bedroomFloorLamp = null;
let bedroomFloorLampJSON = null;

let bathroomFan = null
let bathroomFanJSON = null

let washer = null
let washerJSON = null

let dryer = null
let dryerJSON = null

let frontDoor = null
let frontDoorJSON = null

let backDoor = null
let backDoorJSON = null

let garageDoor = null
let garageDoorJSON = null

let kitchenFan = null
let kitchenFanJSON = null

let diningRoomLight = null
let diningRoomLightJSON = null

let livingRoomTimeElement = document.getElementById("living-room-time-info");
let bedroomDeskTimeElement = document.getElementById("bedroom-desk-time-info");
let bedroomFloorTimeElement = document.getElementById("bedroom-floor-time-info");
let bathroomFanTimeElement = document.getElementById("bathroom-fan-time-info");
let washerTimeElement = document.getElementById("washer-time-info");
let dryerTimeElement = document.getElementById("dryer-time-info");
let frontDoorTimeElement = document.getElementById("front-door-time-info");
let backDoorTimeElement = document.getElementById("back-door-time-info");
let garageDoorTimeElement = document.getElementById("garage-door-time-info");
let kitchenFanTimeElement = document.getElementById("kitchen-fan-time-info");
let diningRoomLightTimeElement = document.getElementById("dining-light-time-info");

let timeElementArray = [livingRoomTimeElement, bedroomDeskTimeElement, bedroomFloorTimeElement,
    bathroomFanTimeElement, washerTimeElement, dryerTimeElement, frontDoorTimeElement, backDoorTimeElement,
    garageDoorTimeElement, kitchenFanTimeElement, diningRoomLightTimeElement];

let homeItemsArray = [livingRoomLampJSON, bedroomDeskLampJSON, bedroomFloorLampJSON, bathroomFanJSON, 
    washerJSON, dryerJSON, frontDoorJSON, backDoorJSON, garageDoorJSON, kitchenFanJSON,
    diningRoomLightJSON];

let livingRoomIconElement = document.getElementById("living-room-icon");
let bedroomDeskLampIconElement = document.getElementById("bedroom-desk-icon");
let bedroomFloorLampIconElement = document.getElementById("bedroom-floor-icon");
let bathroomFanIconElement = document.getElementById("bathroom-fan-icon");
let washerIconElement = document.getElementById("washer-icon");
let dryerIconElement = document.getElementById("dryer-icon");
let frontDoorIconElement = document.getElementById("front-door-icon");
let backDoorIconElement = document.getElementById("back-door-icon");
let garageDoorIconElement = document.getElementById("garage-door-icon");
let kitchenFanIconElement = document.getElementById("kitchen-fan-icon");
let diningRoomLightIconElement = document.getElementById("dining-room-icon");

let iconElementArray = [livingRoomIconElement, bedroomDeskLampIconElement, bedroomFloorLampIconElement,
    bathroomFanIconElement, washerIconElement, dryerIconElement, frontDoorIconElement,
    backDoorIconElement, garageDoorIconElement, kitchenFanIconElement, diningRoomLightIconElement];

let livingRoomLampOperatingIcon = document.createElement("img");
let bedroomDeskLampOperatingIcon = document.createElement("img");
let bedroomFloorLampOperatingIcon = document.createElement("img");
let bathroomFanOperatingIcon = document.createElement("img");
let washerOperatingIcon = document.createElement("img");
let dryerOperatingIcon = document.createElement("img");
let frontDoorOperatingIcon = document.createElement("img");
let backDoorOperatingIcon = document.createElement("img");
let garageDoorOperatingIcon = document.createElement("img");
let kitchenFanOperatingIcon = document.createElement("img");
let diningRoomLightOperatingIcon = document.createElement("img");

livingRoomLampOperatingIcon.src = "icons/bulb-on.png";
bedroomDeskLampOperatingIcon.src = "icons/bulb-on.png";
bedroomFloorLampOperatingIcon.src = "icons/bulb-on.png";
bathroomFanOperatingIcon.src = "icons/operating-check.png";
washerOperatingIcon.src = "icons/operating-check.png";
dryerOperatingIcon.src = "icons/operating-check.png";
frontDoorOperatingIcon.src = "icons/door-open.png";
backDoorOperatingIcon.src = "icons/door-open.png";
garageDoorOperatingIcon.src = "icons/door-open.png";
kitchenFanOperatingIcon.src = "icons/operating-check.png";
diningRoomLightOperatingIcon.src = "icons/operating-check.png";

let livingRoomLampNotOperatingIcon = document.createElement("img");
let bedroomDeskLampNotOperatingIcon = document.createElement("img");
let bedroomFloorLampNotOperatingIcon = document.createElement("img");
let bathroomFanNotOperatingIcon = document.createElement("img");
let washerNotOperatingIcon = document.createElement("img");
let dryerNotOperatingIcon = document.createElement("img");
let frontDoorNotOperatingIcon = document.createElement("img");
let backDoorNotOperatingIcon = document.createElement("img");
let garageDoorNotOperatingIcon = document.createElement("img");
let kitchenFanNotOperatingIcon = document.createElement("img");
let diningRoomLightNotOperatingIcon = document.createElement("img");

livingRoomLampNotOperatingIcon.src = "icons/bulb-off.png";
bedroomDeskLampNotOperatingIcon.src = "icons/bulb-off.png";
bedroomFloorLampNotOperatingIcon.src = "icons/bulb-off.png";
bathroomFanNotOperatingIcon.src = "icons/operating-x.png";
washerNotOperatingIcon.src = "icons/operating-x.png";
dryerNotOperatingIcon.src = "icons/operating-x.png";
frontDoorNotOperatingIcon.src = "icons/door-close.png";
backDoorNotOperatingIcon.src = "icons/door-close.png";
garageDoorNotOperatingIcon.src = "icons/door-close.png";
kitchenFanNotOperatingIcon.src = "icons/operating-x.png";
diningRoomLightNotOperatingIcon.src = "icons/operating-x.png";

let itemsOperatingIconsArray = [livingRoomLampOperatingIcon, bedroomDeskLampOperatingIcon,
    bedroomFloorLampOperatingIcon, bathroomFanOperatingIcon, washerOperatingIcon, dryerOperatingIcon,
    frontDoorOperatingIcon, backDoorOperatingIcon, garageDoorOperatingIcon, kitchenFanOperatingIcon, 
    diningRoomLightOperatingIcon];

let itemsNotOperatingIconsArray = [livingRoomLampNotOperatingIcon, bedroomDeskLampNotOperatingIcon, 
    bedroomFloorLampNotOperatingIcon, bathroomFanNotOperatingIcon, washerNotOperatingIcon, dryerNotOperatingIcon,
    frontDoorNotOperatingIcon, backDoorNotOperatingIcon, garageDoorNotOperatingIcon, kitchenFanNotOperatingIcon, 
    diningRoomLightNotOperatingIcon];

for (let i = 0; i < itemsOperatingIconsArray.length; i++){
    itemsOperatingIconsArray[i].className = "icons";
    itemsNotOperatingIconsArray[i].className = "icons";
}

function run (){
    livingRoomLamp = localStorage.getItem("livingRoomLamp");
    livingRoomLampJSON = JSON.parse(livingRoomLamp);

    bedroomDeskLamp = localStorage.getItem("bedroomDeskLamp");
    bedroomDeskLampJSON = JSON.parse(bedroomDeskLamp);

    bedroomFloorLamp = localStorage.getItem("bedroomFloorLamp");
    bedroomFloorLampJSON = JSON.parse(bedroomFloorLamp);

    bathroomFan = localStorage.getItem("bathroomFan");
    bathroomFanJSON = JSON.parse(bathroomFan);

    washer = localStorage.getItem("washer");
    washerJSON = JSON.parse(washer);

    dryer = localStorage.getItem("dryer");
    dryerJSON = JSON.parse(dryer);

    frontDoor = localStorage.getItem("frontDoor");
    frontDoorJSON = JSON.parse(frontDoor);

    backDoor = localStorage.getItem("backDoor");
    backDoorJSON = JSON.parse(backDoor);

    garageDoor = localStorage.getItem("garageDoor");
    garageDoorJSON = JSON.parse(garageDoor);

    kitchenFan = localStorage.getItem("kitchenFan");
    kitchenFanJSON = JSON.parse(kitchenFan);

    diningRoomLight = localStorage.getItem("diningRoomLight");
    diningRoomLightJSON = JSON.parse(diningRoomLight);

    homeItemsArray = [livingRoomLampJSON, bedroomDeskLampJSON, bedroomFloorLampJSON, bathroomFanJSON, 
        washerJSON, dryerJSON, frontDoorJSON, backDoorJSON, garageDoorJSON, kitchenFanJSON,
        diningRoomLightJSON];

    timeElementArray = [livingRoomTimeElement, bedroomDeskTimeElement, bedroomFloorTimeElement,
        bathroomFanTimeElement, washerTimeElement, dryerTimeElement, frontDoorTimeElement, backDoorTimeElement,
        garageDoorTimeElement, kitchenFanTimeElement, diningRoomLightTimeElement];

}

runButton.addEventListener("click", checkIfItemIsStillOperating);

function checkIfItemIsStillOperating(){

    let currentDate = new Date();
    let currentHour = currentDate.getHours();
    let currentMinute = currentDate.getMinutes();
    let currentTime = currentHour + ":" + currentMinute;

    for(let i = 0; i < homeItemsArray.length; i++){
        if (currentTime >= homeItemsArray[i].startTime && currentTime <= homeItemsArray[i].endTime){
            if(i == 6 || i == 7 || i == 8){
                timeElementArray[i].innerHTML = "DOOR OPENED";
            } else if (i == 0 || i == 1 || i == 2 || i == 10){
                timeElementArray[i].innerHTML = "LIGHT ON";    
            } else {
                timeElementArray[i].innerHTML = "OPERATING";   
            }
            timeElementArray[i].style.color = "green";
            iconElementArray[i].appendChild(itemsOperatingIconsArray[i]);
            itemsOperatingIconsArray[i].style.display = "inline"
            itemsNotOperatingIconsArray[i].style.display = "none";
        } else {
            if(i == 6 || i == 7 || i == 8){
                timeElementArray[i].innerHTML = "DOOR CLOSED";
            } else if (i == 0 || i == 1 || i == 2 || i == 10){
                timeElementArray[i].innerHTML = "LIGHT OFF";    
            } else {
                timeElementArray[i].innerHTML = "NOT OPERATING";   
            }
            timeElementArray[i].style.color = "red";
            iconElementArray[i].appendChild(itemsNotOperatingIconsArray[i]);
            itemsNotOperatingIconsArray[i].style.display = "inline"
            itemsOperatingIconsArray[i].style.display = "none";
        }
    }

    setInterval(checkIfItemIsStillOperating, 1000);
}

function addCurrentTime(){
    let currentDate = new Date();
    let currentTime = currentDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

    document.getElementById("header-separator").innerHTML = currentTime;
    //repeat this function every second
    setInterval(addCurrentTime, 1000);
}