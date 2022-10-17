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

//checkIfDevicesAreStillOperating();

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
            localStorage.setItem("livingRoomLamp", JSON.stringify(livingRoomLamp));
            //console.log(livingRoomLamp + "end time is: " + endTime)
            break;
        case "lamp-bed1":
            bedroomDeskLamp.setStartTime = startTime;
            bedroomDeskLamp.setEndTime = endTime;
            setIfDeviceIsOperating(bedroomDeskLamp, startTime, endTime);
            localStorage.setItem("bedroomDeskLamp", JSON.stringify(bedroomDeskLamp));
            break;
        case "lamp-bed2":
            bedroomFloorLamp.setStartTime = startTime;
            bedroomFloorLamp.setEndTime = endTime;
            setIfDeviceIsOperating(bedroomFloorLamp, startTime, endTime);
            localStorage.setItem("bedroomFloorLamp", JSON.stringify(bedroomFloorLamp));
            break;
        case "fan-bathroom":
            bathroomFan.setStartTime = startTime;
            bathroomFan.setEndTime = endTime;
            setIfDeviceIsOperating(bathroomFan, startTime, endTime);
            localStorage.setItem("bathroomFan", JSON.stringify(bathroomFan));
            break;
        case "washer":
            washer.setStartTime = startTime;
            washer.setEndTime = endTime;
            setIfDeviceIsOperating(washer, startTime, endTime);
            localStorage.setItem("washer", JSON.stringify(washer));
            break;
        case "dryer":
            dryer.setStartTime = startTime;
            dryer.setEndTime = endTime;
            setIfDeviceIsOperating(dryer, startTime, endTime);
            localStorage.setItem("dryer", JSON.stringify(dryer));
        case "front-door":
            frontDoor.setStartTime = startTime;
            frontDoor.setEndTime = endTime;
            setIfDeviceIsOperating(frontDoor, startTime, endTime);
            localStorage.setItem("frontDoor", JSON.stringify(frontDoor));
            break;
        case "back-door":
            backDoor.setStartTime = startTime;
            backDoor.setEndTime = endTime;
            setIfDeviceIsOperating(backDoor, startTime, endTime);
            localStorage.setItem("backDoor", JSON.stringify(backDoor));
            break;
        case "garage-door":
            garageDoor.setStartTime = startTime;
            garageDoor.setEndTime = endTime;
            setIfDeviceIsOperating(garageDoor, startTime, endTime);
            localStorage.setItem("garageDoor", JSON.stringify(garageDoor));
            console.log(livingRoomLamp.getStartTime)
            break;
        case "fan-kitchen":
            kitchenFan.setStartTime = startTime;
            kitchenFan.setEndTime = endTime;
            setIfDeviceIsOperating(kitchenFan, startTime, endTime);
            localStorage.setItem("kitchenFan", JSON.stringify(kitchenFan));
            break;
        case "dining-light":
            diningRoomLight.setStartTime = startTime;
            diningRoomLight.setEndTime = endTime;
            setIfDeviceIsOperating(diningRoomLight, startTime, endTime);
            localStorage.setItem("diningRoomLight", JSON.stringify(diningRoomLight));
            break;
    }

}

function setIfDeviceIsOperating(homeItem, startTime, endTime){

    let currentDate = new Date();
    let currentHour = currentDate.getHours();
    let currentMinute = currentDate.getMinutes();
    let currentTime = currentHour + ":" + currentMinute;


    if (currentTime >= startTime && currentTime <= endTime){
        console.log("item is operating")
        homeItem.setIsOperating = true;
    }
    else {
        console.log("item is NOT operating")
        homeItem.setIsOperating = false;
    }
}