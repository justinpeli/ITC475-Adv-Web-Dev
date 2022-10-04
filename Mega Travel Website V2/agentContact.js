function createActiviitesList(){
    let locationFromKey = sessionStorage.getItem("location");

        if(locationFromKey != null){
            console.log("redirected correctly");
            console.log(locationFromKey);
            setActivities(locationFromKey);
        }

}

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

function setActivities(locationString){
    let title = "";
    let activities = null;

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
            title = "Please Select a Location on the Home Scren!"
            activities = null;
                break;
    }

    const destinedLocationTitle = document.createElement("b");
    destinedLocationTitle.id = "destined-location-title";
    destinedLocationTitle.innerText = title;
    document.getElementById("contact-agent-form").appendChild(destinedLocationTitle);

    for(let i = 0; i < activities.length; i++){
        let newActivityString = document.createElement("p");
        let newActivityCheckBox = document.createElement("INPUT");

        newActivityString.innerHTML = activities[i];
        newActivityCheckBox.setAttribute("type", "checkbox");
        newActivityCheckBox.required = true;

        newActivityCheckBox.id = "activity-check-box";
        newActivityString.id = "activity-check-box-text";

        
        document.getElementById("contact-agent-form").appendChild(newActivityCheckBox);
        document.getElementById("contact-agent-form").appendChild(newActivityString);
        document.getElementById("contact-agent-form").appendChild(document.createElement("br"));
    }
}