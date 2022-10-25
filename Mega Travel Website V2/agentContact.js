function setActivities(locationString){

    let titleElement = document.getElementById("destined-location-title");

    let title = "";
    let activities = null;
    let checkBoxArray = new Array();

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

    titleElement.innerHTML = title;

    for(let i = 0; i < activities.length; i++){
        let newActivityString = document.createElement("label");
        let newActivityCheckBox = document.createElement("INPUT");
        let lineBreak = document.createElement("br");

        newActivityString.innerHTML = activities[i];
        newActivityCheckBox.setAttribute("type", "checkbox");
        checkBoxArray.push(newActivityCheckBox);

        newActivityCheckBox.id = "activity-check-box";
        newActivityString.id = "activity-check-box-text";
        lineBreak.id = "line-break";

        newActivityCheckBox.value = activities[i];

        document.getElementById("activities-div").appendChild(newActivityCheckBox);
        document.getElementById("activities-div").appendChild(newActivityString);
        document.getElementById("activities-div").appendChild(lineBreak);

        /*
        document.getElementById("contact-agent-form").appendChild(newActivityCheckBox);
        document.getElementById("contact-agent-form").appendChild(newActivityString);
        document.getElementById("contact-agent-form").appendChild(lineBreak);
        */
        
    }

    for(let i = 0; i < checkBoxArray.length; i++){
        checkBoxArray[i].name = "checkBox"+i;
    }

    console.log(checkBoxArray)

}

function getParameter(){
    let locationSelect = document.getElementById("select-location");
    let value = locationSelect.options[locationSelect.selectedIndex].value;
    setActivities(value);

}

function clearAllActivities(){
    let checkBoxes = document.querySelectorAll("[id='activity-check-box']");
    let checkBoxText = document.querySelectorAll("[id='activity-check-box-text']");
    let lineBreak = document.querySelectorAll("[id='line-break']");

    for (let i = 0; i < checkBoxes.length; i++){
        checkBoxes[i].remove();
        checkBoxText[i].remove();
        lineBreak[i].remove();
    }
}