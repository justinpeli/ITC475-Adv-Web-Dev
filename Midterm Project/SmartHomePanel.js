let livingRoomLampStartTime = null;
let livingRoomLampEndTime = null;

let bedRoomDeskLampStartTime = null;
let bedRoomDeskLampEndTime = null;

let bedRoomFloorLampStartTime = null;
let bedRoomFloorLampEndTime = null;

let bathroomFanStartTime = null;
let bathroomFanEndTime = null;

let washerStartTime = null;
let washerEndTime = null;

let dryerStartTime = null;
let dryerEndTime = null;

let frontDoorStartTime = null;
let frontDoorEndTime = null;

let backDoorStartTime = null;
let backDoorEndTIme = null;

let garageDoorStartTime = null;
let garageDoorEndTime = null;

let kitchenFanStartTime = null;
let kitchenFanEndTime = null;

let diningRoomLightStartTime = null;
let diningRoomLightEndTIme = null;

function setParameters(){
    let selectedItemElement = document.getElementById("select-device");
    let selectedItemValue = selectedItemElement.options[selectedItemElement.selectedIndex].value;
    let selecteItemText = selectedItemElement.options[selectedItemElement.selectedIndex].text;

    let startTime = document.getElementById("start-time").value;

    let endTime = document.getElementById("end-time").value;

    if (selectedItemValue != "none" && startTime != "" && endTime != ""){
        console.log(selectedItemValue);
        console.log("StartTime is: " + startTime);
        console.log("EndTime is: " + endTime);

        if (confirm("You Selected " + selecteItemText + "!\nStart Time: " + startTime + "\nEnd Time: " + endTime)) {

            setDeviceTimes(selectedItemValue, startTime, endTime);
            document.getElementById("start-time").value = "";
            document.getElementById("end-time").value = "";
            document.getElementById("select-device").value = "none";
            console.log("request confirmed");

          } else {
            console.log("request canceled");
          }
          
    } else {
        alert("Please Select an Item With a Start and End Time");
    }
}

function setDeviceTimes(selectedItemValue, startTime, endTime){
    switch(selectedItemValue){
        case "lamp-livingroom":
            livingRoomLampStartTime = startTime;
            livingRoomLampEndTime = endTime;
            break;
        case "lamp-bed1":
            bedRoomDeskLampStartTime = startTime;
            bedRoomDeskLampEndTime = endTime;
            break;
        case "lamp-bed2":
            bedRoomFloorLampStartTime = startTime;
            bedRoomFloorLampEndTime = endTime;
            break;
        case "fan-bathroom":
            bathroomFanStartTime = startTime;
            bathroomFanEndTime = endTime;
            break;
        case "washer":
            washerStartTime = startTime;
            washerEndTime = endTime;
            break;
        case "dryer":
            dryerStartTime = startTime
            dryerEndTime = endTime;
        case "front-door":
            frontDoorStartTime = startTime;
            frontDoorEndTime = endTime;
            break;
        case "back-door":
            backDoorStartTime = startTime;
            backDoorEndTIme = endTime;
            break;
        case "garage-door":
            garageDoorStartTime = startTime;
            garageDoorEndTime = endTime;
            break;
        case "fan-kitchen":
            kitchenFanStartTime = startTime;
            kitchenFanEndTime = endTime;
            break;
        case "dining-light":
            diningRoomLightStartTime = startTime;
            diningRoomLightEndTIme = endTime;
            break;
    }
}

