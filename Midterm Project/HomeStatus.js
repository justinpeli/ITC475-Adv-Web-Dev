let livingRoomLamp = null;
let livingRoomLampJSON = null;
//checkIfOperating(livingRoomLampJSON);

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

function run (){
    livingRoomLamp = localStorage.getItem("livingRoomLamp");
    livingRoomLampJSON = JSON.parse(livingRoomLamp);
    checkIfOperating(livingRoomLampJSON);

    bedroomDeskLamp = localStorage.getItem("bedroomDeskLamp");
    bedroomDeskLampJSON = JSON.parse(bedroomDeskLamp);
    checkIfOperating(bedroomDeskLampJSON);

    bedroomFloorLamp = localStorage.getItem("bedroomFloorLamp");
    bedroomFloorLampJSON = JSON.parse(bedroomFloorLamp);
    checkIfOperating(bedroomFloorLampJSON);

    bathroomFan = localStorage.getItem("bedroomDeskLamp");
    bathroomFanJSON = JSON.parse(bathroomFan);
    checkIfOperating(bathroomFanJSON);

    washer = localStorage.getItem("washer");
    washerJSON = JSON.parse(washer);
    checkIfOperating(washerJSON);

    dryer = localStorage.getItem("dryer");
    dryerJSON = JSON.parse(dryer);
    checkIfOperating(dryerJSON);

    frontDoor = localStorage.getItem("frontDoor");
    frontDoorJSON = JSON.parse(frontDoor);
    checkIfOperating(frontDoorJSON);

    backDoor = localStorage.getItem("backDoor");
    backDoorJSON = JSON.parse(backDoor);
    checkIfOperating(backDoorJSON);

    garageDoor = localStorage.getItem("garageDoor");
    garageDoorJSON = JSON.parse(garageDoor);
    checkIfOperating(garageDoorJSON);

    kitchenFan = localStorage.getItem("kitchenFan");
    kitchenFanJSON = JSON.parse(kitchenFan);
    checkIfOperating(kitchenFanJSON);

    diningRoomLight = localStorage.getItem("diningRoomLight");
    diningRoomLightJSON = JSON.parse(diningRoomLight);
    checkIfOperating(diningRoomLightJSON);

    homeItemsArray = [livingRoomLampJSON, bedroomDeskLampJSON, bedroomFloorLampJSON, bathroomFanJSON, 
        washerJSON, dryerJSON, frontDoorJSON, backDoorJSON, garageDoorJSON, kitchenFanJSON,
        diningRoomLightJSON];

    timeElementArray = [livingRoomTimeElement, bedroomDeskTimeElement, bedroomFloorTimeElement,
        bathroomFanTimeElement, washerTimeElement, dryerTimeElement, frontDoorTimeElement, backDoorTimeElement,
        garageDoorTimeElement, kitchenFanTimeElement, diningRoomLightTimeElement];
    
    // console.log("HOME ARRAY ST: " + homeItemsArray[0].startTime);

    addGUIComponents();

}

function checkIfOperating(homeItem){

    /*
    if (Object.keys(homeItem).length === 0){
        if (homeItem.isOperating == true){
            // set the correct icon
            // set the correct text color
        } else {
            // set the correct icon
            // set the correct text color
        }
    }
    */

}


function addGUIComponents(){
    
    for (let i = 0; i < homeItemsArray.length; i++){

        //console.log(timeElementArray[0])
        
        if(homeItemsArray[4].isOperating == true){
            timeElementArray[i].innerHTML = "Start time for item is: " + homeItemsArray[i].startTime;
        }
        else {
            console.log("fail");
        }
        
    }
    
}


function addCurrentTime(){
    let currentDate = new Date();
    let currentTime = currentDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

    document.getElementById("header-separator").innerHTML = currentTime;
    //repeat this function every second
    setInterval(addCurrentTime, 1000);
}