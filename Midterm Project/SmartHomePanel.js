// OBJECT CLASS
class HomeItem {

    set setStartTime(startTime){
        this.startTime = startTime;
    }

    set setEndTime(endTime){
        this.endTime = endTime;
    }

    set setIsOperating(isOperating){
        this.isOperating = isOperating;
    }

    get getStartTime(){
        return this.startTime;
    }

    get getEndTime(){
        return this.endTime;
    }

    get getOperatingStatus(){
        return this.isOperating;
    }

}

let livingRoomLamp = new HomeItem();
let bedroomDeskLamp = new HomeItem();
let bedroomFloorLamp = new HomeItem();
let bathroomFan = new HomeItem();
let washer = new HomeItem();
let dryer = new HomeItem();
let frontDoor = new HomeItem();
let backDoor = new HomeItem();
let garageDoor = new HomeItem();
let kitchenFan = new HomeItem();
let diningRoomLight = new HomeItem();


function setParameters(){
    let selectedItemElement = document.getElementById("select-device");
    let selectedItemValue = selectedItemElement.options[selectedItemElement.selectedIndex].value;
    let selecteItemText = selectedItemElement.options[selectedItemElement.selectedIndex].text;

    let startTime = document.getElementById("start-time").value;

    let endTime = document.getElementById("end-time").value;

    if (selectedItemValue != "none" && startTime != "" && endTime != ""){

        if (confirm("You Selected " + selecteItemText + "!\nStart Time: " + startTime + "\nEnd Time: " + endTime)) {

            setItemAttributes(selectedItemValue, startTime, endTime);
            document.getElementById("start-time").value = "";
            document.getElementById("end-time").value = "";
            document.getElementById("select-device").value = "none";
            console.log("request confirmed");

          } else {
            console.log("request canceled");
          }

    } else {
        alert("\nERROR: \n\nPLEASE SELECT AN ITEM WITH A START AND END TIME");
    }
}

function setItemAttributes(selectedItemValue, startTime, endTime){

    switch(selectedItemValue){
        case "lamp-livingroom":
            livingRoomLamp.setStartTime = startTime;
            livingRoomLamp.setEndTime = endTime;
            setIfDeviceIsOperating(livingRoomLamp, startTime, endTime);
            break;
        case "lamp-bed1":
            bedroomDeskLamp.setStartTime = startTime;
            bedroomDeskLamp.setEndTime = endTime;
            setIfDeviceIsOperating(bedroomDeskLamp, startTime, endTime);
            break;
        case "lamp-bed2":
            bedroomFloorLamp.setStartTime = startTime;
            bedroomFloorLamp.setEndTime = endTime;
            setIfDeviceIsOperating(bedroomFloorLamp, startTime, endTime);
            break;
        case "fan-bathroom":
            bathroomFan.setStartTime = startTime;
            bathroomFan.setEndTime = endTime;
            setIfDeviceIsOperating(bathroomFan, startTime, endTime);
            break;
        case "washer":
            washer.setStartTime = startTime;
            wahser.setEndTime = endTime;
            setIfDeviceIsOperating(washer, startTime, endTime);
            break;
        case "dryer":
            dryer.setStartTime = startTime;
            dryer.setEndTime = endTime;
            setIfDeviceIsOperating(dryer, startTime, endTime);
        case "front-door":
            frontDoor.setStartTime = startTime;
            frontDoor.setEndTime = endTime;
            setIfDeviceIsOperating(frontDoor, startTime, endTime);
            break;
        case "back-door":
            backDoor.setStartTime = startTime;
            backDoor.setEndTime = endTime;
            setIfDeviceIsOperating(backDoor, startTime, endTime);
            break;
        case "garage-door":
            garageDoor.setStartTime = startTime;
            garageDoor.setEndTime = endTime;
            setIfDeviceIsOperating(garageDoor, startTime, endTime);
            console.log("LR END TIME IS: " + livingRoomLamp.getEndTime);
            break;
        case "fan-kitchen":
            kitchenFan.setStartTime = startTime;
            kitchenFan.setEndTime = endTime;
            setIfDeviceIsOperating(kitchenFan, startTime, endTime);
            break;
        case "dining-light":
            diningRoomLight.setStartTime = startTime;
            diningRoomLight.setEndTime = endTime;
            setIfDeviceIsOperating(diningRoomLight, startTime, endTime);
            break;
    }

    /*
    sessionStorage.setItem("bedroomDeskLampStartTime", bedroomDeskLamp.getStartTime);
    sessionStorage.setItem("bedroomDeskLampEndTime", bedroomDeskLamp.getEndTime);
    sessionStorage.setItem("bedroomDeskLampOperatingStatus", bedroomDeskLamp.getOperatingStatus);

    sessionStorage.setItem("bedroomFloorLampStartTime", bedroomFloorLamp.getStartTime);
    sessionStorage.setItem("bedroomFloorLampEndTime", bedroomFloorLamp.getEndTime);
    sessionStorage.setItem("bedroomFloorLampOperatingStatus", bedroomFloorLamp.getOperatingStatus);
    
    sessionStorage.setItem("bathroomFanStartTime", bathroomFan.getStartTime);
    sessionStorage.setItem("bathroomFanEndTime", bathroomFan.getEndTime);
    sessionStorage.setItem("bathroomFanOperatingStatus", bathroomFan.getOperatingStatus);

    sessionStorage.setItem("washerStartTime", washer.getStartTime);
    sessionStorage.setItem("washerEndTime", washer.getEndTime);
    sessionStorage.setItem("washerOperatingStatus", washer.getOperatingStatus);

    sessionStorage.setItem("dryerStartTime", dryer.getStartTime);
    sessionStorage.setItem("dryerEndTime", dryer.getEndTime);
    sessionStorage.setItem("dryerOperatingStatus", dryer.getOperatingStatus);

    sessionStorage.setItem("frontDoorStartTime", frontDoor.getStartTime);
    sessionStorage.setItem("frontDoorEndTime", frontDoor.getEndTime);
    sessionStorage.setItem("frontDoorOperatingStatus", frontDoor.getOperatingStatus);
    */

    setSessionVariables(livingRoomLamp, "livingRoomLampStartTime", "livingRoomLampEndTime",
        "livingRoomLampOperationStatus");

    setSessionVariables(bedroomDeskLamp, "bedroomDeskLampStartTime", "bedroomDeskLampOperatingStatus",
        "bedroomDeskLampOperatingStatus");
    
    console.log(typeof sessionStorage.getItem("bedroomDeskLampStartTime") == "undefinded")

    if (typeof sessionStorage.getItem("bedroomDeskLampStartTime") === null){
        console.log("ERRORED CORRECT")
    }
    else {
        console.log("WRONG")
    }
}

function setIfDeviceIsOperating(homeItem, startTime, endTime){
    if (startTime != "" && endTime != ""){
        homeItem.setIsOperating = true;
    }
    else {
        homeItem.setIsOperating = false;
    }
}

function setSessionVariables(homeItem, startTimeString, endTimeString, operatingStatusString){
    sessionStorage.setItem(startTimeString, homeItem.getStartTime);
    sessionStorage.setItem(endTimeString, homeItem.getEndTime);
    sessionStorage.setItem(operatingStatusString, homeItem.getOperatingStatus);
}