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

checkIfDevicesAreStillOperating();

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
            console.log(livingRoomLamp + "end time is: " + endTime)
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
            washer.setEndTime = endTime;
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

    setLocaleVariables();

}

function setIfDeviceIsOperating(homeItem, startTime, endTime){

    let currentDate = new Date();
    let currentHour = currentDate.getHours();
    let currentMinute = currentDate.getMinutes();
    let currentTime = currentHour + ":" + currentMinute;

    console.log("current time is: " + currentTime)
    console.log(homeItem + "start time is: " + startTime)
    console.log(homeItem + "end time is: " + endTime)


    if (currentTime => startTime && currentTime <= endTime){
        homeItem.setIsOperating = true;
    }
    else {
        homeItem.setIsOperating = false;
    }
}

function checkIfDevicesAreStillOperating(){
    // create an array for all items
    // create a for loop to loop through an array containing all items
    // check if device has a start and end time
    // if current time is outside of start and end time set isOperating of item to false
    // if inside start and end time frame set isOperating to true
    // call the setLocaleVariables Method
    // repeat every second

    let homeItemsArray = [livingRoomLamp, bedroomDeskLamp, bedroomFloorLamp, bathroomFan, 
        washer, dryer, frontDoor, backDoor, garageDoor, kitchenFan,
        diningRoomLight];

    let currentDate = new Date();
    let currentHour = currentDate.getHours();
    let currentMinute = currentDate.getMinutes();
    let currentTime = currentHour + ":" + currentMinute;

    for (let i = 0; i < homeItemsArray.length; i++){
        if (homeItemsArray[i] != "undefined"){
            if (currentTime => homeItemsArray[i].getStartTime && currentTime <= homeItemsArray[i].getEndTime){
                homeItemsArray[i].setIsOperating = true;
            }
            else {
                homeItemsArray[i].setIsOperating = false;
            }
        }
    }
    setLocaleVariables();
    setInterval(checkIfDevicesAreStillOperating, 1000)
}

function setLocaleVariables(){
    localStorage.setItem("livingRoomLamp", JSON.stringify(livingRoomLamp));
    localStorage.setItem("bedroomDeskLamp", JSON.stringify(bedroomDeskLamp));
    localStorage.setItem("bedroomFloorLamp", JSON.stringify(bedroomFloorLamp));
    localStorage.setItem("bathroomFan", JSON.stringify(bathroomFan));
    localStorage.setItem("washer", JSON.stringify(washer));
    localStorage.setItem("dryer", JSON.stringify(dryer));
    localStorage.setItem("frontDoor", JSON.stringify(frontDoor));
    localStorage.setItem("backDoor", JSON.stringify(backDoor));
    localStorage.setItem("garageDoor", JSON.stringify(garageDoor));
    localStorage.setItem("kitchenFan", JSON.stringify(kitchenFan));
    localStorage.setItem("diningRoomLight", JSON.stringify(diningRoomLight));
}