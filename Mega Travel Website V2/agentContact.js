/*
function createActiviitesList(){
    let locationFromKey = sessionStorage.getItem("location");

        if(locationFromKey != null){
            console.log("redirected correctly");
            console.log(locationFromKey);
            setActivities(locationFromKey);
        }

}
*/

/*
function addNoLocationErrorMessage(){

    let locaiton = document.getElementById("destined-location-title");
    let locationErrorSpan = document.getElementById("no-location-error");
    let selectedLocationText = document.getElementById("selected-location-text");

    if(locaiton == null){
        console.log("no such element");
        locationErrorSpan.innerHTML = "Select a Location on the Home Page Before Filling Out Form"
    } else {
        console.log("this element exists");
        selectedLocationText.innerHTML = "Selected Location:";
        selectedLocationText.style.marginTop = "20px";
    }
}
*/

function setActivities(locationString){

    let titleElement = document.getElementById("destined-location-title");

    let title = "";
    let activities = null;

    if(titleElement != null){
        clearAllActivities();
    }

    switch(locationString){
        case "maldives":
            title = "Maldives, South Asia"
            activities = ["Museums", "Sailing", "Beach", "Hiking", "Boating"];
                break;
        case "mexico":
            title = "Cancun, Mexico"
            activities = ["Parks and Recreation", "Beaches", "Boating", "Snorkeling"];
                break;
        case "new zealand":
            title = "New Zealand"
            activities = ["City Tours", "Sports", "Cycling", "Museums", "Boating"];
                break;
        case "italy":
            title = "Venice, Italy"
            activities = ["Museums", "Theatre", "Parks and Recreation", "City Tours"];
                break;
        default:
            title = "Please Select a Location!"
            activities = [];
                break;
    }

    //let destinedLocationTitle = document.createElement("b");
    //destinedLocationTitle.id = "destined-location-title";
    //destinedLocationTitle.innerText = title;
    //document.getElementById("location-information").appendChild(destinedLocationTitle);

    titleElement.innerHTML = title;

    for(let i = 0; i < activities.length; i++){
        let newActivityString = document.createElement("label");
        let newActivityCheckBox = document.createElement("INPUT");
        let lineBreak = document.createElement("br");

        newActivityString.innerHTML = activities[i];
        newActivityCheckBox.setAttribute("type", "checkbox");
        newActivityCheckBox.required = true;

        newActivityCheckBox.id = "activity-check-box";
        newActivityString.id = "activity-check-box-text";
        lineBreak.id = "line-break";

        
        document.getElementById("activities-div").appendChild(newActivityCheckBox);
        document.getElementById("activities-div").appendChild(newActivityString);
        document.getElementById("activities-div").appendChild(lineBreak);
    }

}

function getParameter(){
    let locationSelect = document.getElementById("select-location");
    let value = locationSelect.options[locationSelect.selectedIndex].value;
    setActivities(value);

}

function clearAllActivities(){
    let checkBoxes = document.querySelectorAll("[id='activity-check-box']");
    let checkBoxText = document.querySelectorAll("[id='activity-check-box-text']");
    //let title = document.getElementById("destined-location-title");
    let lineBreak = document.querySelectorAll("[id='line-break']");

    for (let i = 0; i < checkBoxes.length; i++){
        checkBoxes[i].remove();
        checkBoxText[i].remove();
        lineBreak[i].remove();
    }
    //title.remove();
}